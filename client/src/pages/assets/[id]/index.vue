<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import { fetchAssetById } from "@/api/snipeit";
import { useDateStore } from "@/stores/date";

import BaseButton from "../../../components/BaseButton.vue";
import BaseDateTimePicker from "../../../components/BaseDateTimePicker.vue";
import ButtonInfo from "../../../components/ButtonInfo.vue";
import ContactList from "../../../components/ContactList.vue";
import DateRange from "../../../components/DateRange.vue";
import DetailsList from "../../../components/DetailsList.vue";

interface Props {
	id: number;
}

const props = defineProps<Props>();
const infos = [
	{
		name: "Jan-Henrik Schröder",
		email: "schroeder@imis.uni-luebeck.de",
		room: "Geb. 64, Raum 1.05",
	},
];

const data = await fetchAssetById(props.id);
const asset = data.asset;
const details = data.details;

const isDetailsOpen = ref(false);

const dateStore = useDateStore();
</script>

<template>
	<template v-if="asset != null">
		<div class="grid w-full md:grid-cols-[1fr_3fr] md:p-8">
			<div class="flex justify-center overflow-hidden rounded-md bg-white">
				<img
					class="border-gray object-contain"
					:src="asset.image"
					alt="Image Description"
				/>
			</div>

			<div class="p-2">
				<div class="h-min border-gray-300 md:p-4 md:pr-4">
					<h1 class="mb-2 md:text-4xl">{{ asset.name }}</h1>
					<p>{{ asset.serial }}</p>
					<p>{{ asset.status_label.name }}</p>
					<p class="mb-2">Abholort: {{ asset.location?.name }}</p>
					<div class="pb-20 md:pb-2">
						<template v-if="details.length !== 0">
							<DetailsList
								class=""
								:items="isDetailsOpen ? details : details.slice(0, 2)"
							/>
							<ButtonInfo
								v-if="details.length > 2"
								class="mb-4"
								@click="isDetailsOpen = !isDetailsOpen"
								>{{
									isDetailsOpen
										? "Weniger anzeigen"
										: "Details anzeigen"
								}}</ButtonInfo
							>
						</template>
						<ContactList :infos="infos" class="mb-6"></ContactList>
					</div>
				</div>
				<div class="hidden w-full md:block">
					<DateRange
						class="rounded-xl border-white md:p-4"
						:asset-id="id"
					></DateRange
					><RouterLink
						:to="`/assets/${id}/checkout`"
						class="flex justify-center p-4"
						><BaseButton theme="primary" class="w-full"
							>Reservieren</BaseButton
						></RouterLink
					>
				</div>
			</div>

			<div
				class="fixed inset-x-0 bottom-0 block border-t border-gray-300 bg-white p-2 lg:hidden"
			>
				<BaseButton
					v-if="dateStore.start == null"
					theme="primary"
					type="button"
					class="hs-dropdown-toggle w-full items-center"
					data-hs-offcanvas="#hs-datepicker-asset"
				>
					<span>Verfügbarkeit einsehen</span>
				</BaseButton>
				<div v-else class="flex items-center justify-between gap-4 md:hidden">
					<div class="flex flex-col">
						<p>{{ asset.status_label.name }}</p>
						<button
							type="button"
							class="hs-dropdown-toggle flex w-full items-center justify-between gap-2 rounded-md border border-transparent bg-gray-100 py-3 px-4 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 md:hidden"
							data-hs-offcanvas="#hs-datepicker-asset"
						>
							<span>Zeitraum</span>
							<span class="text-orange-700">
								{{ dateStore.formattedStartSmall }} -
								{{ dateStore.formattedEndSmall }}</span
							>
						</button>
						<RouterLink :to="`/assets/${id}/checkout`"
							><BaseButton theme="primary">
								Reservieren
							</BaseButton></RouterLink
						>
					</div>
				</div>
			</div>
		</div>
	</template>
	<div
		id="hs-datepicker-asset"
		class="hs-offcanvas fixed inset-x-0 bottom-0 z-[60] block h-full w-full translate-y-full transform border-b bg-white transition-all duration-300 hs-offcanvas-open:translate-y-0 lg:hidden"
		tabindex="-1"
	>
		<div class="flex items-center justify-between border-b py-3 px-4">
			<h3 class="">Zeitraum</h3>
			<button
				type="button"
				class="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white"
				data-hs-offcanvas="#hs-datepicker-asset"
			>
				<XIcon class="h-4 w-4" />
			</button>
		</div>
		<div class="">
			<BaseDateTimePicker :asset-id="id"></BaseDateTimePicker>
			<div class="flex items-center justify-between">
				<BaseButton
					theme="secondary"
					class="hs-dropdown-toggle"
					data-hs-offcanvas="#hs-datepicker-asset"
					>Zurücksetzen</BaseButton
				><BaseButton
					theme="secondary"
					class="hs-dropdown-toggle"
					data-hs-offcanvas="#hs-datepicker-asset"
					>Heute</BaseButton
				>
				<BaseButton
					theme="primary"
					class="hs-dropdown-toggle"
					data-hs-offcanvas="#hs-datepicker-asset"
					>Weiter</BaseButton
				>
			</div>
		</div>
	</div>
</template>
