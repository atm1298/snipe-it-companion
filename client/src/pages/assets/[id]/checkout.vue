<script setup lang="ts">
import { ref } from "vue";

import type { SnipeitAsset } from "@/api/snipeit";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseDateTimePicker from "@/components/BaseDateTimePicker.vue";
import ContactList from "@/components/ContactList.vue";
import { useDateStore } from "@/stores/date";

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
fetch("http://localhost:3000/assets/" + props.id, options)
	.then(res => res.json())
	.then((data: { asset: SnipeitAsset }) => {
		asset.value = data.asset;
	})

	.then(() => console.log(asset.value));

const dateStore = useDateStore();

function reserveAsset() {
	fetch("http://localhost:3000/reservation", {
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
		.then(data => console.log(data));
}
</script>

<template>
	<div v-if="step == 0 && asset" class="space-y-4 p-2 pb-20 md:p-4">
		<h2 class="mb-3">Ausleihzeitraum</h2>
		<BaseDateTimePicker></BaseDateTimePicker>
		<h2 class="mb-3">Verfügbarkeit prüfen</h2>
		<BaseCard
			theme="checkout"
			:asset="asset"
			:id="asset.id"
			:name="asset.name"
			:image="asset.image"
			:status="asset.status_label.name"
		></BaseCard>
		<div class="fixed inset-x-0 bottom-0 border-t border-gray-300 bg-white p-2">
			<BaseButton theme="primary" class="w-full" @click="() => step++">
				Weiter</BaseButton
			>
		</div>
	</div>
	<div v-if="step == 1 && asset" class="">
		<h2 class="p-2 md:p-4">Reservierungszusammenfassung</h2>

		<div class="grid grid-cols-1 gap-2 p-2 md:grid-cols-2 xl:grid-cols-[1fr_2fr]">
			<div>
				<BaseCard
					class="hidden md:block"
					theme="default"
					:key="asset.id"
					:id="asset.id"
					:name="asset.name"
					:image="asset.image"
					:status="asset.status_label.name"
				></BaseCard>
				<BaseCard
					class="block md:hidden"
					theme="checkout"
					:key="asset.id"
					:id="asset.id"
					:name="asset.name"
					:image="asset.image"
					:status="asset.status_label.name"
				></BaseCard>
			</div>
			<div class="w-full">
				<div class="mb-3 space-y-2 rounded-xl border p-2">
					<h3 class="">Ausleihinformationen</h3>
					<div class="grid grid-cols-3">
						<p class="font-normal text-gray-500">Ort</p>
						<p class="col-span-2 font-medium text-gray-900">
							{{ asset.location.name }}
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
				<ContactList :infos="infos" class="rounded-xl border p-2"></ContactList>
			</div>
		</div>
		<div
			class="fixed inset-x-0 bottom-0 flex justify-between border-t border-gray-300 bg-white p-2"
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
	</div>
</template>
