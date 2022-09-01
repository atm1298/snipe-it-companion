<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";

import { useDateStore } from "@/stores/date";

import BaseBreadcrumbs from "../components/BaseBreadcrumbs.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseDateTimePicker from "../components/BaseDateTimePicker.vue";
import ButtonInfo from "../components/ButtonInfo.vue";
import ContactList from "../components/ContactList.vue";
import DetailsList from "../components/DetailsList.vue";
import ModulCheck from "../components/ModulCheck.vue";

const details = [
	{ title: "Raum", description: "Collaborations Lab" },
	{ title: "Raum", description: "Collaborations Lab" },
	{ title: "Raum", description: "Collaborations Lab" },
];
const infos = [
	{
		name: "Anna-Tabea Manske",
		email: "manske@imis.uni-luebeck.de",
		room: "Geb. 64, Raum 1.05",
	},
];

const dateStore = useDateStore();
</script>

<template>
	<BaseBreadcrumbs />

	<h1>Titel</h1>
	<p>Seriennumer: 465123</p>
	<p class="mb-4">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nulla? Corporis
		possimus delectus, vero ex corrupti ipsam iste. Incidunt facere quaerat ducimus
		iusto dolor? Itaque perspiciatis veniam voluptas aperiam velit.
	</p>
	<div class="pb-20">
		<DetailsList :items="details" />
		<ButtonInfo class="mb-4">Alle Details anzeigen</ButtonInfo>
		<ContactList :infos="infos"></ContactList>
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

		<div v-else class="flex items-center justify-between gap-4">
			<div class="flex flex-col">
				<p>Verfügbar</p>
				<span
					class="hs-dropdown-toggle cursor-pointer text-sm text-teal-700"
					data-hs-offcanvas="#hs-offcanvas-bottom"
				>
					{{ dateStore.formattedStartSmall }} -
					{{ dateStore.formattedEndSmall }}</span
				>
			</div>
			<ModulCheck class="grow" />
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
				class="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
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
