<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import type { SnipeitAsset } from "@/api/snipeit";

import BaseButton from "./BaseButton.vue";
import BaseCardCheckout from "./BaseCardCheckout.vue";

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
fetch(import.meta.env.VITE_SERVER_URL + "/assets?category_id=" + props.id, options)
	.then(res => res.json())
	.then((data: { assets: { rows: SnipeitAsset[] } }) => {
		assets.value = data.assets.rows.map(row => ({
			...row,
			name: row.name.split(/&[gl]t;/g)[0],
		}));
	})

	.then(() => console.log(assets.value));
</script>

<template>
	<div>
		<BaseButton
			theme="primary"
			class="hs-dropdown-toggle inline-flex w-full items-center justify-center rounded-md"
			data-hs-modal="#hs-vertically-centered-modal"
		>
			Hinzufügen
		</BaseButton>

		<div
			id="hs-vertically-centered-modal"
			class="hs-modal fixed top-0 left-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
		>
			<div
				class="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-modal-open:mt-7 hs-modal-open:opacity-100 hs-modal-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"
			>
				<div class="flex w-full flex-col rounded-md border bg-white shadow-sm">
					<div class="flex items-center justify-between border-b py-3 px-4">
						<h3 class="font-bold text-gray-800">Material hinzufügen</h3>
						<button
							type="button"
							class="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
							data-hs-modal="#hs-vertically-centered-modal"
						>
							<span class="sr-only">Schließen</span>
							<XIcon class="h-4 w-4"></XIcon>
						</button>
					</div>
					<div class="overflow-y-auto p-4">
						<BaseCardCheckout
							v-for="asset in assets"
							:key="asset.id"
							:id="asset.id"
							:name="asset.name"
							:image="asset.image"
							:status="asset.status_label.name"
						></BaseCardCheckout>
					</div>
					<div
						class="flex flex-col items-center justify-end gap-2 border-t py-3 px-4"
					>
						<BaseButton
							theme="secondary"
							class="hs-dropdown-toggle rounde inline-flex items-center justify-center gap-2"
							data-hs-modal="#hs-vertically-centered-modal"
							>Weitere Materialien suchen</BaseButton
						>
						<a
							class="inline-flex items-center justify-center gap-2 rounded-md bg-gray-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-200"
							href="/"
						>
							Materialsuche abschließen
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
