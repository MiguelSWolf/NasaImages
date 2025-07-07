import { ref, onMounted, reactive } from "vue";
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

const listItems = ref<ListItemProps[]>([]);
const search = ref<string>("jupiter");
const page = ref<number>(1);

export function useNasaSearch() {
	onMounted(async () => {
		const searchData = await searchImages(search.value, page.value);
		if (searchData.collection.items.length > 0) {
			const items = searchData.collection.items.map(
				(item: NasaAPIResponseItem) => {
					return {
						title: item.data[0].title,
						description: item.data[0].description,
						keywords: item.data[0].keywords,
						thumbnail: item.links[0].href,
						images: "",
					} as ListItemProps;
				}
			);
			listItems.value = [...listItems.value, ...items];
		} else {
			console.error("items not found");
		}
	});

	return { listItems };
}
