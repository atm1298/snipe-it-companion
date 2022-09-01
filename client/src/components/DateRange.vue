<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";

import { useDateStore } from "@/stores/date";

import BaseButton from "../components/BaseButton.vue";
import BaseDateTimePicker from "../components/BaseDateTimePicker.vue";

const dateStore = useDateStore();
</script>

<template>
	<div>
		<h2>Zeitraum</h2>
		<p class="mb-2">Gib den Zeitraum, zu dem das Material benötigt wird an</p>
		<button
			type="button"
			class="hs-dropdown-toggle inline-flex w-full items-center justify-between gap-2 rounded-full border border-transparent bg-gray-100 py-3 px-4 text-sm font-semibold transition-all hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1"
			data-hs-offcanvas="#hs-offcanvas-bottom"
		>
			<span>Zeitraum</span>
			<span class="text-teal-700">
				{{ dateStore.formattedStartSmall }} -
				{{ dateStore.formattedEndSmall }}</span
			>
			
		</button>

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
	</div>
</template>
