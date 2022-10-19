<script setup lang="ts">
import { ref, watch } from "vue";

import type { SnipeitAsset } from "@/api/snipeit";
import BaseCard from "@/components/BaseCard.vue";

interface Props {
	id: string;
}

const props = defineProps<Props>();

// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

const assets = ref<SnipeitAsset[]>();
fetch(import.meta.env.VITE_SERVER_URL + "/assets?category_id=" + props.id, options)
	.then(res => res.json())
	.then((data: { assets: { rows: SnipeitAsset[] } }) => {
		assets.value = data.assets.rows.map(row => ({
			...row,
			name: row.name.split(/&[gl]t;/g)[0],
		}));
	})

	.then(() => console.log(assets.value));

watch(
	() => props.id,
	() => {
		fetch(
			import.meta.env.VITE_SERVER_URL + "/assets?category_id=" + props.id,
			options
		)
			.then(res => res.json())
			.then((data: { assets: { rows: SnipeitAsset[] } }) => {
				assets.value = data.assets.rows.map(row => ({
					...row,
					name: row.name.split(/&[gl]t;/g)[0],
				}));
			})

			.then(() => console.log(assets.value));
	}
);
</script>

<template>
	<div class="grid h-min w-full grid-cols-2 gap-2 p-2 md:p-4 lg:grid-cols-6">
		<BaseCard
			v-for="asset in assets"
			:key="asset.id"
			:id="asset.id"
			:name="asset.name"
			:image="asset.image"
			:status="asset.status_label.name"
			:statusId="asset.status_label.name.id"
		></BaseCard>
	</div>
</template>
