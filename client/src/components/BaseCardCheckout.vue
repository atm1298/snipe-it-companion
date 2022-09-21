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
	<div class="flex flex-row rounded-md border bg-white p-4">
		<div class="flex w-1/3 rounded-md sm:rounded-l-xl md:rounded-tr-none">
			<img class="h-44 object-contain" :src="image" alt="Image Description" />
		</div>
		<div class="flex flex-wrap">
			<div class="flex h-full flex-col sm:p-7">
				<h3 class="">{{ name }}</h3>
				<div class="flex flex-row justify-between sm:mt-auto">
					<p class="text-xs text-gray-600">{{ status }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
