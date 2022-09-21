<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import type { SnipeitAsset } from "../../api/snipeit";
import BaseButton from "../../components/BaseButton.vue";
import BaseCard from "../../components/BaseCard.vue";

// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const route = useRoute();
const searchParams = new URLSearchParams(route.query as any);
const assets = ref<SnipeitAsset[]>();
fetch(import.meta.env.VITE_SERVER_URL + "/assets?" + searchParams, options)
	.then(res => res.json())
	.then(
		(data: { assets: { rows: SnipeitAsset[] } }) =>
			(assets.value = data.assets.rows.filter(row => row.status_label.id !== 9))
	)
	.then(() => console.log(assets.value));
</script>

<template>
	<div v-if="assets" class="p-2">
		<div v-if="assets.length > 0" class="grid grid-cols-2 gap-4 md:p-4">
			<BaseCard
				v-for="asset in assets"
				:key="asset.id"
				:id="asset.id"
				:name="asset.name"
				:image="asset.image"
				:status="asset.status_label.name"
			></BaseCard>
		</div>
		<div v-else class="flex h-full w-full flex-col items-center gap-4">
			<h1 class="flex items-stretch p-3 text-center">
				Es wurden leider keine Ergebnisse gefunden :(
			</h1>
			<RouterLink to="/categories"
				><BaseButton theme="primary">Alle Kategorien anzeigen</BaseButton>
			</RouterLink>
		</div>
	</div>
</template>
