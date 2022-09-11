<script setup lang="ts">
interface Props {
	theme: "default" | "checkout";
	id: number;
	name: string;
	image: string;
	status: string;
}
defineProps<Props>();
</script>

<template>
	<div>
		<RouterLink
			v-if="theme == 'default'"
			class="group flex h-full w-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
			:to="`/assets/${id}`"
		>
			<div class="flex h-full w-full rounded-xl sm:rounded-l-xl md:rounded-tr-none">
				<img class="w-full object-contain" :src="image" alt="Image Description" />
			</div>
			<div class="p-4 md:p-5">
				<h3>{{ name }}</h3>
				<p class="mt-1 text-gray-800">{{ status }}</p>
			</div>
		</RouterLink>

		<div v-else-if="theme == 'checkout'" class="flex flex-row gap-4">
			<div class="flex w-1/3 rounded-xl sm:rounded-l-xl md:rounded-tr-none">
				<img class="w-full object-contain" :src="image" alt="Image Description" />
			</div>
			<div class="flex flex-wrap">
				<div class="flex h-full flex-col p-2 sm:p-7">
					<h3 class="">{{ name }}</h3>
					<div class="flex flex-row justify-between sm:mt-auto">
						<p class="text-xs text-gray-600">{{ status }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
