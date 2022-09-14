<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/outline";

interface Props {
	id?: number;
	category: string;
}
defineProps<Props>();
</script>

<template>
	<RouterLink
		v-if="!!id"
		:to="`/categories/${id}`"
		class="flex flex-row items-center justify-between border-b border-gray-200 p-2 text-base hover:rounded-lg hover:bg-gray-200"
	>
		<div class="flex flex-row items-center gap-4">
			<h4>{{ category }}</h4>
		</div>
		<ChevronRightIcon class="h-4 w-4 text-gray-600"></ChevronRightIcon>
	</RouterLink>
	<button
		v-else
		class="flex w-full flex-row items-center justify-between border-b border-gray-200 p-2 text-base hover:rounded-lg hover:bg-gray-200"
	>
		<div class="flex flex-row items-center gap-4">
			<h4>{{ category }}</h4>
		</div>
		<ChevronRightIcon class="h-4 w-4 text-gray-600"></ChevronRightIcon>
	</button>
</template>
