<script setup lang="ts">
	import ListItem from "./ListItem.vue";
	import { useNasaSearch } from "@/composables/useNasaSearch";
	const { items, isFetching } = useNasaSearch();
</script>
<template>
	<div class="columns is-multiline is-mobile">
		<div class="column is-full" v-if="isFetching">Loading...</div>
		<ListItem
			v-for="item in items"
			:key="item.id"
			:thumbnail="item.thumbnail"
			:title="item.title"
			:description="item.description"
			:keywords="item.keywords"
			class="column is-3-desktop is-4-tablet is-12-mobile"
		/>
	</div>
</template>
