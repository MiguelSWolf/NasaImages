<script setup lang="ts">
	import ListItem from "./ListItem.vue";
	import { useNasaSearch } from "@/composables/useNasaSearch";
	const { data, isFetching } = useNasaSearch();
</script>
<template>
	<div class="columns is-multiline is-mobile">
		<div v-if="isFetching">Loading...</div>
		<ListItem
			v-for="(item, index) in data"
			:key="index"
			:thumbnail="item.thumbnail"
			:title="item.title"
			:description="item.description"
			:keywords="item.keywords"
			class="column is-one-quarter"
		/>
	</div>
</template>
