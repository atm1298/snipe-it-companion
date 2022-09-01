<script setup lang="ts">
import { ref } from "vue";

import BaseBreadcrumbs from "../../components/BaseBreadcrumbs.vue";
import CategoryListItem from "../../components/CategoryListItem.vue";

// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

const categories = ref();
fetch("http://localhost:3000/categories", options)
	.then(res => res.json())
	.then(data => (categories.value = data.categories.rows))
	.then(() => console.log(categories.value));
</script>

<template>
	<div>
		<BaseBreadcrumbs />

		<CategoryListItem
			class="mb-4"
			v-for="category in categories"
			:id="category.id"
			:key="category.id"
			:category="category.name"
		/>
	</div>
</template>
