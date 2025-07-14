<script setup lang="ts">
	import { useNasaSearch } from "@/composables/useNasaSearch";

	const { searchText, refetch } = useNasaSearch();
</script>

<template>
	<div class="columns">
		<div class="column is-10 is-offset-1">
			<form action="" class="form" @submit.prevent="refetch()">
				<div class="field has-addons">
					<div class="control is-expanded">
						<input
							v-model="searchText"
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
