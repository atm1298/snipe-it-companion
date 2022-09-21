<script setup lang="ts">
interface Props {
	id: number;
	name: string;
	image: string;
	status: string;
}
defineProps<Props>();
</script>

<template>
	<RouterLink
		class="group flex h-full w-full flex-col overflow-hidden rounded-md border bg-white shadow-sm transition hover:shadow-lg"
		:to="`/assets/${id}`"
	>
		<div class="flex h-full w-full rounded-md sm:rounded-l-xl md:rounded-tr-none">
			<img class="w-full object-contain" :src="image" alt="Image Description" />
		</div>
		<div class="p-4 md:p-5">
			<h4 class="sm:text-base">{{ name }}</h4>
			<div v-if="status.id == 9">
				<p class="mt-1 text-gray-500">{{ status }}</p>
			</div>
			<div v-else>
				<p class="mt-1 text-orange-500">{{ status }}</p>
			</div>
		</div>
	</RouterLink>
</template>
