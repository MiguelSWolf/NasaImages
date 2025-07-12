<script setup lang="ts">
	import { defineProps } from "vue";
	import { type ListItemProps } from "@/composables/useNasaSearch";
	defineProps<ListItemProps>();
</script>

<template>
	<div class="card">
		<div class="card-image">
			<figure class="image is-4by3">
				<img :src="thumbnail" />
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<h3>{{ title }}</h3>
				<p>
					{{ keywords.join(", ") }}
				</p>
			</div>
		</div>
		<footer class="card-footer">
			<a href="#" class="card-footer-item">Expand</a>
		</footer>
	</div>
</template>
<style scoped>
	.card-content {
	}
</style>
