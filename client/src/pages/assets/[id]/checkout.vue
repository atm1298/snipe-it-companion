<script setup lang="ts">
import { ref } from "vue";

import AssetStatus from "@/components/AssetStatus.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseDateTimePicker from "@/components/BaseDateTimePicker.vue";
import ContactList from "@/components/ContactList.vue";
import ModulReservation from "@/components/ModulReservation.vue";
import { useDateStore } from "@/stores/date";

const step = ref(0);
const infos = [
	{
		name: "Name Nachname",
		email: "nachname@imis.uni-luebeck.de",
		room: "Geb. 64, Raum 1.05",
	},
];

const dateStore = useDateStore();
</script>

<template>
	<div v-if="step == 0" class="space-y-4 pb-20">
		<h2 class="mb-3">Ausleihzeitraum</h2>
		<BaseDateTimePicker></BaseDateTimePicker>
		<h2 class="mb-3">Verfügbatkeit prüfen</h2>
		<BaseCard theme="checkout"></BaseCard>
		<div class="fixed inset-x-0 bottom-0 border-t border-gray-300 bg-white p-2">
			<BaseButton theme="primary" class="w-full" @click="() => step++">
				Weiter</BaseButton
			>
		</div>
	</div>
	<div v-if="step == 1" class="space-y-4">
		<h1 class="mb-3">Zusammenfassung</h1>
		<AssetStatus status="now" days="3" class="mb-3">Assetname</AssetStatus>
		<div class="mb-3">
			<h2 class="">Ausleihzeitraum</h2>
			<p class="font-semibold">
				{{ dateStore.formattedStart }} - {{ dateStore.formattedEnd }}
			</p>
		</div>
		<ContactList :infos="infos"></ContactList>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ex eveniet ut
			quibusdam impedit voluptatem doloribus aperiam pariatur odio.
		</p>
		<div
			class="absolute inset-x-0 bottom-0 flex justify-center border-t border-gray-300 p-2"
		>
			<ModulReservation></ModulReservation>
		</div>
	</div>
</template>
