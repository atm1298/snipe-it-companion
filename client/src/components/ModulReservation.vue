<script setup lang="ts">
import { XIcon } from "@heroicons/vue/outline";

import BaseButton from "./BaseButton.vue";
</script>

<template>
	<div>
		<BaseButton
			theme="primary"
			class="hs-dropdown-toggle inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent"
			data-hs-modal="#hs-vertically-centered-modal"
		>
			Reservierung abschließen
		</BaseButton>

		<div
			id="hs-vertically-centered-modal"
			class="hs-modal fixed top-0 left-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
		>
			<div
				class="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-modal-open:mt-7 hs-modal-open:opacity-100 hs-modal-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"
			>
				<div class="flex flex-col rounded-xl border bg-white shadow-sm">
					<div class="flex items-center justify-between border-b py-3 px-4">
						<h3 class="font-bold text-gray-800">Reservierung abschließen</h3>
						<button
							type="button"
							class="hs-dropdown-toggle inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-gray-500 transition-all hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white"
							data-hs-modal="#hs-vertically-centered-modal"
						>
							<span class="sr-only">Schließen</span>
							<XIcon class="h-4 w-4"></XIcon>
						</button>
					</div>
					<div class="overflow-y-auto p-4">
						<p class="mt-1 text-gray-800">
							Deine Reservierung wurde abgeschlossen. Zum ändern deines
							Ausleihzeitraum gehe zurück zur Übersicht und lasse dir mit
							einem Klick auf die Materialien alle Informationen anzeigen
						</p>
					</div>
					<div class="flex items-center justify-end gap-x-2 border-t py-3 px-4">
						<BaseButton
							theme="secondary"
							class="hs-dropdown-toggle rounde inline-flex items-center justify-center gap-2"
							data-hs-modal="#hs-vertically-centered-modal"
							>Zurück</BaseButton
						>
						<a
							class="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-200"
							href="/"
						>
							Fertig
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
