import { ref, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { searchImages } from "@/services/search";

export type ListItemProps = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	images: string;
	keywords: string[];
};

type NasaAPIResponseItem = {
	data: {
		nasa_id: string;
		title: string;
		description: string;
		keywords: string[];
		date_created: string;
	}[];
	links: {
		height: number;
		href: string;
		rel: string;
		render: string;
		size: number;
		width: number;
	}[];
};

export function useNasaSearch() {
	const searchText = ref("jupiter");
	const page = ref(1);
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	watch(searchText, () => {
		page.value = 1;
	});

	const { data, refetch, isFetching, error } = useQuery({
		queryKey: ["nasa-search", searchText.value, page.value],
		queryFn: async () => {
			const response = await searchImages(searchText.value, page.value);
			if (!response?.collection?.items?.length)
				throw new Error("No items found");
			return response.collection.items.map(
				(item: NasaAPIResponseItem): ListItemProps => ({
					id: item.data[0].nasa_id,
					title: item.data[0].title,
					description: item.data[0].description,
					keywords: item.data[0].keywords ?? [],
					thumbnail: item.links?.[0]?.href ?? "",
					images: "",
				})
			);
		},
		enabled: false,
	});

	const nextPage = () => {
		page.value++;
		refetch();
		scrollToTop();
	};

	const prevPage = () => {
		if (page.value > 1) {
			page.value--;
			refetch();
			scrollToTop();
		}
	};

	return {
		items: data,
		searchText,
		page,
		refetch,
		isFetching,
		error,
		nextPage,
		prevPage,
	};
}
