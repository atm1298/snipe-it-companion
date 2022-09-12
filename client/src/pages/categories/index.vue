<script setup lang="ts">
import { ref } from "vue";

import CategoryListItem from "../../components/CategoryListItem.vue";

// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

const categories = ref();
const subcategories = ref();
fetch("http://localhost:3000/categories", options)
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
	<div class="mb-2 grid h-min w-full grid-cols-1 gap-4 p-2 md:p-4">
		<!-- <BaseBreadcrumbs /> -->
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
		</template>
	</div>
</template>
