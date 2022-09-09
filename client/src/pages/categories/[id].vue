<script setup lang="ts">
import { ref } from "vue";

import type { SnipeitAsset } from "@/api/snipeit";
import BaseCard from "@/components/BaseCard.vue";

interface Props {
	id: number;
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
fetch("http://localhost:3000/assets?category_id=" + props.id, options)
	.then(res => res.json())
	.then((data: { assets: { rows: SnipeitAsset[] } }) => {
		assets.value = data.assets.rows;
	})

	.then(() => console.log(assets.value));
</script>

<template>
	<div class="grid h-min w-full grid-cols-2 gap-2 p-2 md:p-4 lg:grid-cols-4">
		<BaseCard
			theme="default"
			v-for="asset in assets"
			:key="asset.id"
			:id="asset.id"
			:name="asset.name"
			:image="asset.image"
			:status="asset.status_label.name"
		></BaseCard>
	</div>
</template>
