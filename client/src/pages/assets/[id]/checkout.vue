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
		email: "nachname@imis.uni-luebeck.de",
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
		<h1 class="p-2 md:p-4">Zusammenfassung</h1>

		<div class="grid grid-cols-1 gap-4 p-2 md:grid-cols-2 md:p-4">
			<div class="h-min rounded-2xl border p-2 md:p-4">
				<BaseCard
					theme="checkout"
					:key="asset.id"
					:id="asset.id"
					:name="asset.name"
					:image="asset.image"
					:status="asset.status_label.name"
				></BaseCard>
			</div>
			<div class="h-min rounded-2xl border p-2 md:p-4">
				<div class="mb-3 space-y-4">
					<h2 class="">Ausleihzeitraum</h2>
					<p class="rounded-lg bg-gray-200 p-2">
						{{ dateStore.formattedStart }} - {{ dateStore.formattedEnd }}
					</p>
				</div>
				<ContactList :infos="infos"></ContactList>
			</div>
			<div class="pb-20 md:col-span-2">
				<h2>Bla-Erklärung</h2>
				<p>
					Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten ist
					Art. 6 Abs. 1 lit. f DSGVO. Unsere ausführlichen
					Datenschutzrechtlichen Hinweise sind hier zu finden. Diese Webseite
					nutzt ein Programm zur statistischen Auswertung der Nutzung der
					Seiten. Für diese Zwecke wird die Open-Source-Software Matomo (ehemals
					Piwik) eingesetzt. Die verwendete Software ist nach den Empfehlungen
					des Unabhängigen Landeszentrums für Datenschutz Schleswig-Holstein
					konfiguriert und folgt den geltenden Datenschutzbestimmungen. Die zum
					Zweck der statistischen Auswertung verwendeten "Cookies" sind
					Textdateien, die nur temporär auf Ihrem Computer gespeichert werden.
				</p>
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
					>Zurück zum Dashboard
				</BaseButton></RouterLink
			>
		</div>
	</div>
</template>
