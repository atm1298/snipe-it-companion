<script setup lang="ts">
import { FilterIcon } from "@heroicons/vue/outline";

import BaseButton from "./BaseButton.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseRadioButton from "./BaseRadioButton.vue";
</script>

<template>
	<div class="mb-2 flex w-full justify-end">
		<button
			type="button"
			class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-gray-50 p-2 text-xs transition-all hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:ring-offset-1"
			data-hs-offcanvas="#hs-offcanvas-right"
		>
			<FilterIcon class="h-4 w-4 text-gray-700"></FilterIcon>
			Filtern & Sortieren
		</button>
	</div>

	<div
		id="hs-offcanvas-right"
		class="hs-offcanvas fixed top-0 right-0 z-[60] h-full w-2/3 max-w-xs translate-x-full transform border-l bg-white px-2 transition-all duration-300 hs-offcanvas-open:translate-x-0"
		tabindex="-1"
	>
		<div class="hs-accordion-group">
			<div class="flex items-center justify-between border-b py-3">
				<h3 class="font-bold text-gray-800">Filtern und Sortieren</h3>
				<button
					type="button"
					class="hs-dropdown-toggle inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-white"
					data-hs-offcanvas="#hs-offcanvas-right"
				>
					<span class="sr-only">Close modal</span>
					<svg
						class="h-3 w-3"
						width="4"
						height="4"
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
			<div class="hs-accordion active" id="hs-basic-heading-one">
				<button
					class="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 py-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-gray-600"
					aria-controls="hs-basic-collapse-one"
				>
					<svg
						class="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.62421 7.86L13.6242 7.85999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M8.12421 13.36V2.35999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					<svg
						class="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.62421 7.86L13.6242 7.85999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					Nutzen
				</button>
				<div
					id="hs-basic-collapse-one"
					class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
					aria-labelledby="hs-basic-heading-one"
				>
					<BaseCheckbox>Videodreh</BaseCheckbox>
					<BaseCheckbox>Tonaufnahme</BaseCheckbox>
					<BaseCheckbox>Musik</BaseCheckbox>
				</div>
			</div>

			<div class="hs-accordion" id="hs-basic-heading-two">
				<button
					class="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 py-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-gray-600"
					aria-controls="hs-basic-collapse-two"
				>
					<svg
						class="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.62421 7.86L13.6242 7.85999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M8.12421 13.36V2.35999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					<svg
						class="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.62421 7.86L13.6242 7.85999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					Verfügbarkeit
				</button>
				<div
					id="hs-basic-collapse-two"
					class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
					aria-labelledby="hs-basic-heading-two"
				>
					<BaseCheckbox>Verfügbar</BaseCheckbox>
					<BaseCheckbox>Nicht verfügbar</BaseCheckbox>
					<BaseCheckbox>Nur im Gebäude nutzbar</BaseCheckbox>
				</div>
			</div>

			<div class="hs-accordion" id="hs-basic-heading-three">
				<button
					class="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 py-3 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-gray-600"
					aria-controls="hs-basic-collapse-three"
				>
					<svg
						class="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.62421 7.86L13.6242 7.85999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M8.12421 13.36V2.35999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					<svg
						class="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.62421 7.86L13.6242 7.85999"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
					Sortieren
				</button>
				<div
					id="hs-basic-collapse-three"
					class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
					aria-labelledby="hs-basic-heading-three"
				>
					<BaseRadioButton>Material von A-Z</BaseRadioButton>
					<BaseRadioButton>Material von Z-A</BaseRadioButton>
					<BaseRadioButton>Neuste Materialien</BaseRadioButton>
					<BaseRadioButton>Älteste Materialien</BaseRadioButton>
				</div>
			</div>
		</div>

		<div
			class="fixed inset-x-0 bottom-0 flex w-full flex-col items-center gap-2 border-t border-gray-300 bg-white p-2"
		>
			<BaseButton theme="primary" class="flex w-full justify-center"
				>Fertig</BaseButton
			>
			<BaseButton theme="secondary" class="flex w-full justify-center"
				>Filter löschen</BaseButton
			>
		</div>
	</div>
</template>
