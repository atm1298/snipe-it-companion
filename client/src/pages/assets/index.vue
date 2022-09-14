<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import type { SnipeitAsset } from "../../api/snipeit";
import BaseButton from "../../components/BaseButton.vue";
import BaseCard from "../../components/BaseCard.vue";
import BaseFilter from "../../components/BaseFilter.vue";

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
fetch("http://localhost:3000/assets?" + searchParams, options)
	.then(res => res.json())
	.then(
		(data: { assets: { rows: SnipeitAsset[] } }) =>
			(assets.value = data.assets.rows.filter(row => row.status_label.id !== 9))
	)
	.then(() => console.log(assets.value));
</script>

<template>
	<div v-if="assets" class="h-full p-2">
		<!-- <BaseBreadcrumbs /> -->
		<BaseFilter class=""></BaseFilter>
		<div v-if="assets.length > 0" class="grid grid-cols-2 gap-4 md:p-4">
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
		<div v-else class="grid h-full grid-cols-1 place-items-center">
			<h1 class="mb-2">Keine Ergebnisse gefunden :(</h1>
			<RouterLink to="/categories"
				><BaseButton theme="primary">Alle Kategorien anzeigen</BaseButton>
			</RouterLink>
		</div>
	</div>
</template>
