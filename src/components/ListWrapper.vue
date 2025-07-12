<script setup lang="ts">
	import ListItem from "./ListItem.vue";
	import { useNasaSearch } from "@/composables/useNasaSearch";
	const { listItems, search } = useNasaSearch();
</script>
<template>
	<div class="columns is-multiline is-mobile">
		<div class="column is-full">
			{{ search }}
		</div>
		<ListItem
			v-for="(item, index) in listItems"
			:key="index"
			:thumbnail="item.thumbnail"
			:title="item.title"
			:description="item.description"
			:keywords="item.keywords"
			class="column is-one-quarter"
		/>
	</div>
</template>
