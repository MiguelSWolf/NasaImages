<script setup lang="ts">
	import { useNasaSearch } from "@/composables/useNasaSearch";
	import { ref } from "vue";

	const nasaSearch = useNasaSearch();
	const handleSubmit = () => {
		nasaSearch.searchText.value = inputSearch.value;
		nasaSearch.refetch();
	};
	const inputSearch = ref("jupiter");
</script>

<template>
	<div class="columns">
		<div class="column is-10 is-offset-1">
			<form action="" class="form" @submit.prevent="handleSubmit">
				<div class="field has-addons">
					<div class="control is-expanded">
						<input
							v-model="inputSearch"
							class="input"
							type="text"
							placeholder="search..."
						/>
					</div>
					<div class="control">
						<button type="submit" class="button is-primary">
							Search
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
