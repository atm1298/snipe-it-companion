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
			class="group flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
			:to="`/assets/${id}`"
		>
			<div
				class="relative overflow-hidden rounded-t-xl pt-[50%] sm:pt-[60%] lg:pt-[80%]"
			>
				<img
					class="absolute top-0 left-0 h-full w-full rounded-t-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
					:src="image"
					alt="Image Description"
				/>
			</div>
			<div class="p-4 md:p-5">
				<h3 class="">{{ name }}</h3>
				<p class="mt-1 text-gray-800">{{ status }}</p>
			</div>
		</RouterLink>

		<div v-else-if="theme == 'checkout'" class="flex flex-row">
			<div
				class="flex w-1/3 rounded-xl sm:max-w-[15rem] sm:rounded-l-xl md:max-w-xs md:rounded-tr-none"
			>
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
