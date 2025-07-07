<script setup lang="ts">
	import ListItem from "./ListItem.vue";
	import { useNasaSearch } from "@/composables/useNasaSearch";
	const { listItems } = useNasaSearch();
</script>
<template>
	<ListItem
		v-for="(item, index) in listItems"
		:key="index"
		:thumbnail="item.thumbnail"
		:title="item.title"
		:description="item.description"
		:keywords="item.keywords"
	/>
</template>
