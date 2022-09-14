<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import { MenuIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import NavbarContent from "./NavbarContent.vue";

const isOpen = ref(false);

function setIsOpen(value: boolean) {
	isOpen.value = value;
}
</script>

<template>
	<div class="block p-2 py-4 text-sm lg:hidden">
		<div
			class="flex w-full items-center rounded-xl border-gray-200 bg-gray-200 text-sm"
		>
			<button
				@click="setIsOpen(true)"
				type="button"
				class="inset-y-0 left-0 z-20 flex items-center pl-4 pr-2 text-gray-500 hover:text-gray-600"
			>
				<span class="sr-only">Toggle Navigation</span>
				<MenuIcon class="h-6 w-6 text-gray-900"></MenuIcon>
			</button>

			<form method="get" action="/assets" class="block w-full lg:hidden">
				<input
					type="search"
					id="search"
					name="search"
					class="w-full rounded-xl border-gray-200 bg-gray-200 text-sm focus:border-gray-800 focus:ring-gray-200"
					placeholder="Nach Materialien suchen"
				/>
			</form>
		</div>
	</div>

	<Dialog as="div" :open="isOpen" @close="setIsOpen" class="lg:hidden">
		<div class="fixed inset-0 bg-black bg-opacity-25" />
		<DialogPanel>
			<NavbarContent @close="setIsOpen(false)"></NavbarContent>
		</DialogPanel>
	</Dialog>
	<NavbarContent class="hidden lg:block"></NavbarContent>
</template>
