import { ref, computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { searchImages } from "@/services/search";

export type ListItemProps = {
	title: string;
	description: string;
	thumbnail: string;
	images: string;
	keywords: string[];
};

type NasaAPIResponseItem = {
	data: { title: string; description: string; keywords: string[] }[];
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

	const queryKey = computed(() => [
		"nasa-search",
		searchText.value,
		page.value,
	]);

	const { data, refetch, isFetching, error } = useQuery({
		queryKey,
		queryFn: async () => {
			const response = await searchImages(searchText.value, page.value);
			if (!response?.collection?.items?.length)
				throw new Error("No items found");
			return response.collection.items.map(
				(item: NasaAPIResponseItem): ListItemProps => ({
					title: item.data[0].title,
					description: item.data[0].description,
					keywords: item.data[0].keywords ?? [],
					thumbnail: item.links?.[0]?.href ?? "",
					images: "",
				})
			);
		},
		placeholderData: () => [], // substituto recomendado para `keepPreviousData`
	});

	return {
		data,
		searchText,
		page,
		refetch,
		isFetching,
		error,
	};
}
