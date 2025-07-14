<script setup lang="ts">
	import { useNasaSearch } from "@/composables/useNasaSearch";

	const { nextPage, prevPage } = useNasaSearch();
</script>
<template>
	<nav class="pagination" role="navigation" aria-label="pagination">
		<a href="#" @click.prevent="prevPage" class="pagination-previous"
			>Previous</a
		>
		<a href="#" @click.prevent="nextPage" class="pagination-next"
			>Next page</a
		>
	</nav>
</template>
