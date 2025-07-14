<script lang="ts" setup>
	import SearchForm from "./components/SearchForm.vue";
	import ListWrapper from "./components/ListWrapper.vue";
	import PaginationWrapper from "./components/PaginationWrapper.vue";
</script>
<template>
	<div class="container is-fullhd py-6">
		<SearchForm />
		<ListWrapper />
		<PaginationWrapper />
	</div>
</template>
