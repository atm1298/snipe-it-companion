<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import type { SnipeitAsset } from "../../api/snipeit";
import BaseBreadcrumbs from "../../components/BaseBreadcrumbs.vue";
import BaseCard from "../../components/BaseCard.vue";
import BaseFilter from "../../components/BaseFilter.vue";
import ButtonInfo from "../../components/ButtonInfo.vue";

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
	<div v-if="assets">
		<BaseBreadcrumbs />

		<div v-if="assets.length < 0" class="grid grid-cols-2 gap-4">
			<BaseFilter></BaseFilter>
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
		<div v-else>
			<h3 class="mb-2">Keine Ergebnisse gefunden</h3>
			<RouterLink to="/categories"
				><ButtonInfo>Kategorien anzeigen</ButtonInfo>
			</RouterLink>
		</div>
	</div>
</template>
