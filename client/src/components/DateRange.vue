<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";

import { useDateStore } from "@/stores/date";

import BaseButton from "../components/BaseButton.vue";
import BaseDateTimePicker from "../components/BaseDateTimePicker.vue";

const dateStore = useDateStore();
</script>

<template>
	<div class="h-min rounded-2xl border border-gray-200 p-2 md:p-4">
		<h2>Zeitraum</h2>
		<p class="mb-2">Zu wann wird das Material benötigt?</p>
		<div class="hidden space-y-2 md:block">
			<div
				class="inline-flex w-full items-center justify-between gap-2 rounded-xl border border-transparent bg-gray-200 py-3 px-4 text-sm font-semibold transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1"
			>
				<span>Zeitraum</span>
				<span class="text-gray-700">
					{{ dateStore.formattedStartSmall }} -
					{{ dateStore.formattedEndSmall }}</span
				>
			</div>
			<BaseDateTimePicker></BaseDateTimePicker>
			<div class="flex items-center justify-between border-b pb-4">
				<BaseButton theme="secondary">Zurücksetzen</BaseButton
				><BaseButton theme="secondary">Heute</BaseButton>
			</div>
		</div>
		<button
			type="button"
			class="hs-dropdown-toggle block w-full items-center justify-between gap-2 rounded-xl border border-transparent bg-gray-200 py-3 px-4 text-sm font-semibold transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 md:hidden"
			data-hs-offcanvas="#hs-offcanvas-bottom"
		>
			<span>Zeitraum</span>
			<span class="text-gray-700">
				{{ dateStore.formattedStartSmall }} -
				{{ dateStore.formattedEndSmall }}</span
			>
		</button>

		<div
			id="hs-offcanvas-bottom"
			class="hs-offcanvas fixed inset-x-0 bottom-0 z-[60] block h-full w-full translate-y-full transform border-b bg-white transition-all duration-300 hs-offcanvas-open:translate-y-0 lg:hidden"
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
