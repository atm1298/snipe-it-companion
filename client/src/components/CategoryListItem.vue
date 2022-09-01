<script setup lang="ts">
import { ChevronRightIcon, SparklesIcon } from "@heroicons/vue/outline";

interface Props {
	id: string;
	category: string;
}
defineProps<Props>();
</script>

<template>
	<RouterLink
		:to="`/assets/categories/${id}`"
		class="flex flex-row items-center justify-between px-4"
	>
		<div class="flex flex-row items-center gap-4">
			<SparklesIcon class="h-4 w-4 text-gray-400"></SparklesIcon>
			<h4>{{ category }}</h4>
		</div>
		<ChevronRightIcon class="h-4 w-4 text-teal-600"></ChevronRightIcon>
	</RouterLink>
</template>
