<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import type { SnipeitAsset } from "@/api/snipeit";
import { useDateStore } from "@/stores/date";

import BaseButton from "../../../components/BaseButton.vue";
import BaseDateTimePicker from "../../../components/BaseDateTimePicker.vue";
import ButtonInfo from "../../../components/ButtonInfo.vue";
import ContactList from "../../../components/ContactList.vue";
import DetailsList from "../../../components/DetailsList.vue";

interface Props {
	id: number;
}

const props = defineProps<Props>();
const details = ref<{ title: string; description: string }[]>([]);
const infos = [
	{
		name: "Jan-Henrik Schröder",
		email: "schroeder@imis.uni-luebeck.de",
		room: "Geb. 64, Raum 1.05",
	},
];

// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

const asset = ref<SnipeitAsset>();
fetch("http://localhost:3000/assets/" + props.id, options)
	.then(res => res.json())
	.then((data: { asset: SnipeitAsset }) => {
		asset.value = data.asset;
		details.value = Object.entries(data.asset.custom_fields)
			.map(array => ({
				title: array[0],
				description: array[1].value,
			}))
			.filter(detail => detail.description.length !== 0);
	})

	.then(() => console.log(asset.value));

const isDetailsOpen = ref(false);

const dateStore = useDateStore();
</script>

<template>
	<template v-if="asset != null">
		<!-- <BaseBreadcrumbs /> -->
		<div class="grid grid-cols-1 gap-5 p-2 md:grid-cols-2 md:p-4">
			<div class="relative overflow-hidden rounded-xl">
				<img
					class="border-gray h-40 w-full rounded-xl border object-contain"
					:src="asset.image"
					alt="Image Description"
				/>
			</div>
			<div>
				<h1>{{ asset.name }}</h1>
				<p>{{ asset.serial }}</p>
				<p class="mb-2">Abholort: {{ asset.location.name }}</p>
				<div class="pb-20">
					<template v-if="details.length !== 0">
						<DetailsList
							class="mb-4"
							:items="isDetailsOpen ? details : details.slice(0, 2)"
						/>
						<ButtonInfo
							v-if="details.length > 2"
							class="mb-4"
							@click="isDetailsOpen = !isDetailsOpen"
							>{{
								isDetailsOpen ? "Weniger anzeigen" : "Details anzeigen"
							}}</ButtonInfo
						>
					</template>
					<ContactList :infos="infos"></ContactList>
				</div>
			</div>

			<div class="fixed inset-x-0 bottom-0 border-t border-gray-300 bg-white p-2">
				<BaseButton
					v-if="dateStore.start == null"
					theme="primary"
					type="button"
					class="hs-dropdown-toggle w-full items-center"
					data-hs-offcanvas="#hs-offcanvas-bottom"
				>
					<span>Verfügbarkeit einsehen</span>
				</BaseButton>
				<div
					v-else
					class="flex items-center justify-between gap-4 lg:justify-end"
				>
					<div class="block flex flex-col lg:hidden">
						<p>{{ asset.status_label.name }}</p>
						<span
							class="hs-dropdown-toggle cursor-pointer text-sm text-gray-700"
							data-hs-offcanvas="#hs-offcanvas-bottom"
						>
							{{ dateStore.formattedStartSmall }} -
							{{ dateStore.formattedEndSmall }}</span
						>
					</div>
					<RouterLink :to="`/assets/${id}/checkout`"
						><BaseButton theme="primary">
							Reservieren
						</BaseButton></RouterLink
					>
				</div>
			</div>
		</div>
		<div
			id="hs-offcanvas-bottom"
			class="hs-offcanvas fixed inset-x-0 bottom-0 z-[60] h-full w-full translate-y-full transform border-b bg-white transition-all duration-300 hs-offcanvas-open:translate-y-0"
			tabindex="-1"
		>
			<div class="flex items-center justify-between border-b py-3 px-4">
				<h3 class="font-bold text-gray-800">Zeitraum</h3>
				<button
					type="button"
					class="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
					data-hs-offcanvas="#hs-offcanvas-bottom"
				>
					<XIcon class="h-4 w-4" />
				</button>
			</div>
			<div class="p-4">
				<BaseDateTimePicker></BaseDateTimePicker>
				<BaseButton
					theme="primary"
					class="hs-dropdown-toggle"
					data-hs-offcanvas="#hs-offcanvas-bottom"
					>Weiter</BaseButton
				>
			</div>
		</div>
	</template>
</template>
