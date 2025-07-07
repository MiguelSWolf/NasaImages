<script setup lang="ts">
	import { defineProps } from "vue";
	import { type ListItemProps } from "@/composables/useNasaSearch";
	defineProps<ListItemProps>();
</script>

<template>
	<div class="list-item">
		<h3>{{ title }}</h3>
		<p>{{ description }}</p>
		<img :src="thumbnail" />
	</div>
</template>
