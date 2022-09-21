<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";

import { useDateStore } from "@/stores/date";

import BaseButton from "../components/BaseButton.vue";
import BaseDateTimePicker from "../components/BaseDateTimePicker.vue";

interface Props {
	assetId?: number;
}

const props = defineProps<Props>();

const dateStore = useDateStore();
</script>

<template>
	<div class="h-min space-y-2">
		<h2>Zeitraum</h2>
		<p class="mb-2">Zu wann wird das Material benötigt?</p>
		<div class="hidden rounded-md bg-white p-4 md:block">
			<div
				class="mb-4 inline-flex w-full items-center justify-between bg-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1"
			>
				<span>Ausgewälter Zeitraum</span>
				<span class="text-orange-600">
					{{ dateStore.formattedStartSmall }} -
					{{ dateStore.formattedEndSmall }}</span
				>
			</div>
			<BaseDateTimePicker :asset-id="assetId"></BaseDateTimePicker>
			<div class="flex items-center justify-between">
				<BaseButton theme="secondary">Zurücksetzen</BaseButton
				><BaseButton theme="secondary">Heute</BaseButton>
			</div>
		</div>
		<button
			type="button"
			class="hs-dropdown-toggle flex w-full items-center justify-between gap-2 rounded-md border bg-white py-3 px-4 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 md:hidden"
			data-hs-offcanvas="#hs-offcanvas-bottom"
		>
			<span>Zeitraum</span>
			<span class="text-orange-600">
				{{ dateStore.formattedStartSmall }} -
				{{ dateStore.formattedEndSmall }}</span
			>
		</button>

		<div
			id="hs-offcanvas-bottom"
			class="hs-offcanvas fixed inset-x-0 bottom-0 z-[60] block h-full w-full translate-y-full transform border-b bg-white p-2 transition-all duration-300 hs-offcanvas-open:translate-y-0 lg:hidden"
			tabindex="-1"
		>
			<div class="flex items-center justify-between border-b py-3 px-4">
				<h3 class="">Zeitraum</h3>
				<button
					type="button"
					class="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
					data-hs-offcanvas="#hs-offcanvas-bottom"
				>
					<XIcon class="h-4 w-4" />
				</button>
			</div>
			<div class="">
				<BaseDateTimePicker></BaseDateTimePicker>
				<div class="flex items-center justify-between">
					<BaseButton
						theme="secondary"
						class="hs-dropdown-toggle"
						data-hs-offcanvas="#hs-offcanvas-bottom"
						>Zurücksetzen</BaseButton
					><BaseButton
						theme="secondary"
						class="hs-dropdown-toggle"
						data-hs-offcanvas="#hs-offcanvas-bottom"
						>Heute</BaseButton
					>
					<BaseButton
						theme="primary"
						class="hs-dropdown-toggle"
						data-hs-offcanvas="#hs-offcanvas-bottom"
						>Weiter</BaseButton
					>
				</div>
			</div>
		</div>
	</div>
</template>
