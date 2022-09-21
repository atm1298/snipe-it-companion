<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import { ref } from "vue";

import CategoryListItem from "./CategoryListItem.vue";

interface Props {
	title: string;
	defaultOpen?: boolean;
	theme: "nav" | "default";
}
defineProps<Props>();
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
		categories.value = categories.value
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
		console.log(categories.value);
	});
</script>

<template>
	<div class="w-full">
		<Disclosure :default-open="defaultOpen" v-slot="{ open }">
			<DisclosureButton
				class="flex w-full items-center justify-between rounded-lg text-left text-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75"
			>
				<h2 class="mb-4">{{ title }}</h2>
				<ChevronUpIcon
					:class="open ? 'rotate-180 transform' : ''"
					class="mb-4 h-5 w-5 text-gray-600"
				/>
			</DisclosureButton>

			<DisclosurePanel v-if="theme == 'nav'" class="pb-4 text-sm text-gray-900"
				><div class="mb-2 grid h-min w-full grid-cols-1 gap-4 rounded-lg md:p-2">
					<template v-if="!subcategories">
						<CategoryListItem
							v-for="category in categories"
							@click="subcategories = category[1]"
							:category="category[0]"
							:key="category[0]"
						>
						</CategoryListItem>
					</template>

					<template v-else>
						<CategoryListItem
							v-for="subcategory in subcategories"
							:id="subcategory.id"
							:key="subcategory.id"
							:category="subcategory.subcategory"
						/>
					</template></div
			></DisclosurePanel>
			<DisclosurePanel v-else class="pb-4 text-base text-gray-500"
				><slot></slot
			></DisclosurePanel>
		</Disclosure>
	</div>
</template>
