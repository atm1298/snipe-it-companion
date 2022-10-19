<script setup lang="ts">
import { ref } from "vue";

import type { SnipeitAsset } from "@/api/snipeit";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseDateTimePicker from "@/components/BaseDateTimePicker.vue";
import ContactList from "@/components/ContactList.vue";
import { useDateStore } from "@/stores/date";

import BaseCardCheckout from "../../../components/BaseCardCheckout.vue";
import DateRange from "../../../components/DateRange.vue";

const props = defineProps<Props>();
const step = ref(0);
const infos = [
	{
		name: "Name Nachname",
		email: "sjchroeder@imis.uni-luebeck.de",
		room: "Geb. 64, Raum 1.05",
	},
];
interface Props {
	id: number;
}
// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

const asset = ref<SnipeitAsset>();
fetch(import.meta.env.VITE_SERVER_URL + "/assets/" + props.id, options)
	.then(res => res.json())
	.then((data: { asset: SnipeitAsset }) => {
		asset.value = data.asset;
		asset.value.name = asset.value.name.split(/&[gl]t;/g)[0];
	})

	.then(() => console.log(asset.value));

const dateStore = useDateStore();

function reserveAsset() {
	fetch(import.meta.env.VITE_SERVER_URL + "/reservation", {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({
			assetId: props.id,
			dateStart: dateStore.start,
			dateEnd: dateStore.end,
			userId: 1,
		}),
	})
		.then(res => res.json())
		.then(data => console.log(data))
		.then(() => (dateStore.start = null))
		.then(() => (dateStore.end = null))
		.then(() => window.location.reload());
}
</script>

<template>
	<div
		v-if="step == 0 && asset"
		class="grid w-full grid-cols-1 gap-8 pb-20 md:grid-cols-[1fr_1fr] md:p-10"
	>
		<div class="space-y-4">
			<div class="block border-b pb-4 md:hidden"><DateRange></DateRange></div>
			<div class="space-y-2 rounded-xl md:p-4">
				<h2 class="">Materialauswahl</h2>
				<p class="">Verfügbarkeit überprüfen</p>
				<BaseCardCheckout
					:asset="asset"
					:id="asset.id"
					:name="asset.name"
					:image="asset.image"
					:status="asset.status_label.name"
				></BaseCardCheckout>
			</div>
		</div>

		<div class="md:h-min md:border-l md:border-gray-300 md:p-4 md:pl-8">
			<div class="hidden md:block">
				<h2>Ausleihzeitraum</h2>
				<p class="mb-2">Zu wann wird das Material benötigt?</p>
				<div class="rounded-md bg-white p-4">
					<div
						class="inline-flex w-full items-center justify-between gap-2 bg-white py-3 px-4 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-1"
					>
						<span class="font-medium text-gray-500"
							>Ausgewälter Zeitraum</span
						>
						<span class="text-orange-600">
							{{ dateStore.formattedStartSmall }} -
							{{ dateStore.formattedEndSmall }}</span
						>
					</div>
					<BaseDateTimePicker></BaseDateTimePicker>
					<div class="flex items-center justify-between pb-4">
						<BaseButton theme="secondary">Zurücksetzen</BaseButton
						><BaseButton theme="secondary">Heute</BaseButton>
					</div>
				</div>
			</div>
		</div>
		<div
			class="fixed inset-x-0 bottom-0 border-t border-gray-300 bg-white p-2 md:hidden"
		>
			<BaseButton theme="primary" class="w-full" @click="() => step++">
				Weiter</BaseButton
			>
		</div>
		<div class="hidden md:block">
			<BaseButton theme="primary" class="" @click="() => step++">
				Weiter</BaseButton
			>
		</div>
	</div>
	<div v-if="step == 1 && asset" class="">
		<h2 class="p-2 md:p-4">Reservierungszusammenfassung</h2>

		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:p-4 xl:grid-cols-[1fr_2fr]">
			<div class="space-y-3">
				<BaseCard
					class="hidden md:block"
					:key="asset.id"
					:id="asset.id"
					:name="asset.name"
					:image="asset.image"
					:status="asset.status_label.name"
				></BaseCard>
				<BaseCard
					class="block w-full md:hidden"
					:key="asset.id"
					:id="asset.id"
					:name="asset.name"
					:image="asset.image"
					:status="asset.status_label.name"
				></BaseCard>
			</div>
			<div class="w-full space-y-4 p-4">
				<div class="space-y-3 border-b pb-2">
					<h2 class="">Ausleihinformationen</h2>
					<div class="grid grid-cols-3">
						<p class="font-normal text-gray-500">Ort</p>
						<p class="col-span-2 font-medium text-gray-900">
							{{ asset.location?.name }}
						</p>
					</div>
					<div class="grid grid-cols-3">
						<p class="font-normal text-gray-500">Abholung</p>
						<p class="col-span-2 font-medium text-gray-900">
							{{ dateStore.formattedStart }}
						</p>
					</div>
					<div class="grid grid-cols-3">
						<p class="font-normal text-gray-500">Rückgabe</p>
						<p class="col-span-2 font-medium text-gray-900">
							{{ dateStore.formattedEnd }}
						</p>
					</div>
				</div>
				<ContactList :infos="infos" class="pb-8"></ContactList>
			</div>
		</div>
		<div
			class="fixed inset-x-0 bottom-0 flex justify-between border-t border-gray-300 bg-white p-2 md:hidden"
		>
			<RouterLink :to="`/assets/${id}/checkout`"
				><BaseButton theme="secondary"> Zurück </BaseButton></RouterLink
			>
			<RouterLink to="/"
				><BaseButton theme="primary" @click="reserveAsset"
					>Reservieren
				</BaseButton></RouterLink
			>
		</div>
		<div class="inset-y-0 right-0 hidden p-2 md:block">
			<div class="flex justify-end gap-5 px-4">
				<RouterLink :to="`/assets/${id}/checkout`"
					><BaseButton theme="secondary"> Zurück </BaseButton></RouterLink
				>
				<RouterLink to="/"
					><BaseButton theme="primary" @click="reserveAsset"
						>Reservieren
					</BaseButton></RouterLink
				>
			</div>
		</div>
	</div>
</template>
