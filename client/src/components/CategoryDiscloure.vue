<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronLeftIcon, ChevronUpIcon, ViewGridAddIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import CategoryListItem from "./CategoryListItem.vue";

const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

const categories = ref();
const subcategories = ref();
fetch(import.meta.env.VITE_SERVER_URL + "/categories", options)
	.then(res => res.json())
	.then(data => (categories.value = data.categories.rows))
	.then(() => {
		console.log(categories.value);
		categories.value = categories.value
			.filter(category => category.assets_count > 0)
			.map(category => {
				const catSplit = category.name.split(" - ");
				return {
					id: category.id,
					category: catSplit[0],
					subcategory: catSplit[1],
				};
			})
			.reduce((acc, category) => {
				return {
					...acc,
					[category.category]: [
						...(acc[category.category] ?? []),
						{
							id: category.id,
							subcategory: category.subcategory,
						},
					],
				};
			}, {});
		categories.value = Object.entries(categories.value);
	});
</script>

<template>
	<div class="w-full">
		<Disclosure v-slot="{ open }">
			<DisclosureButton
				class="flex w-full items-center gap-x-3 p-2 text-base text-slate-900 hover:rounded-md hover:bg-gray-100"
			>
				<div class="flex w-full items-center gap-3">
					<ViewGridAddIcon
						class="h-4 w-4 text-gray-900 md:h-5 md:w-5"
					></ViewGridAddIcon>
					<slot class="">Kategorien</slot>
				</div>
				<ChevronUpIcon
					:class="open ? 'rotate-180 transform' : ''"
					class="h-5 w-5 text-gray-600"
				/>
			</DisclosureButton>

			<DisclosurePanel class="pl-6 text-sm text-gray-900"
				><div class="my-2 grid h-min w-full grid-cols-1 gap-4 md:p-4">
					<template v-if="!subcategories">
						<CategoryListItem
							class="hover:rounded-md hover:bg-gray-100"
							v-for="category in categories"
							@click="subcategories = category[1]"
							:category="category[0]"
							:key="category[0]"
						>
						</CategoryListItem>
					</template>

					<template v-else>
						<button
							@click="subcategories = null"
							class="flex w-full flex-row items-center gap-2 border-b border-gray-300 p-2 text-base hover:rounded-md hover:bg-gray-100"
						>
							<ChevronLeftIcon
								class="h-4 w-4 text-gray-600"
							></ChevronLeftIcon>
							<div class="flex flex-row items-center gap-4">
								<h4 class="font-semibold">Zurück</h4>
							</div>
						</button>
						<CategoryListItem
							class="hover:rounded-md hover:bg-gray-100"
							v-for="subcategory in subcategories"
							:id="subcategory.id"
							:key="subcategory.id"
							:category="subcategory.subcategory"
						/>
					</template></div
			></DisclosurePanel>
		</Disclosure>
	</div>
</template>
