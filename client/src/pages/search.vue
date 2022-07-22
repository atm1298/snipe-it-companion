<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";

import BaseButton from "../components/BaseButton.vue";
import BaseDatePicker from "../components/BaseDateRangePicker.vue";
</script>

<template>
	<div>
		<h2>Zeitraum</h2>
		<p>Gib den Zeitraum, zu dem das Material benötigt wird an</p>
		<button
			type="button"
			class="hs-dropdown-toggle inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent bg-gray-100 py-3 px-4 text-sm font-semibold transition-all hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-1"
			data-hs-offcanvas="#hs-offcanvas-bottom"
		>
			Zeitraum
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
					<span class="sr-only">Close modal</span>
					<svg
						class="h-3.5 w-3.5"
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
							fill="currentColor"
						/>
					</svg>
				</button>
			</div>
			<div class="p-4">
				<BaseDatePicker></BaseDatePicker>
				<BaseButton
					theme="primary"
					class="hs-dropdown-toggle"
					data-hs-offcanvas="#hs-offcanvas-bottom"
					>Weiter</BaseButton
				>
			</div>
		</div>
	</div>
	<div>
		<h2>Material</h2>
		<p>Wähle dein Material aus</p>
		<div class="relative">
			<input
				type="search"
				id="hs-leading-icon"
				name="hs-leading-icon"
				class="block w-full rounded-full border-gray-50 bg-gray-100 py-3 px-4 pl-11 text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500"
				placeholder="Suche"
			/>
			<div
				class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
			>
				<SearchIcon class="h-4 w-4 text-gray-400"></SearchIcon>
			</div>
		</div>
	</div>
</template>
