<script setup lang="ts">
import DetailsListItem from "./DetailsListItem.vue";

defineProps<{
	items: {
		title: string;
		description: string;
	}[];
}>();
</script>

<template>
	<div class="pb-2">
		<h2 class="mb-2">Details</h2>
		<div class="space-y-2">
			<DetailsListItem
				v-for="item in items"
				:title="item.title"
				:key="item.title"
				:desciption="item.description"
			>
			</DetailsListItem>
		</div>
	</div>
</template>
