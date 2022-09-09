<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

interface Props {
	title: string;
	defaultOpen?: boolean;
}
defineProps<Props>();
</script>

<template>
	<div class="w-ful border-b">
		<Disclosure :default-open="defaultOpen" v-slot="{ open }">
			<DisclosureButton
				class="flex w-full items-center justify-between p-2 py-4 text-left text-lg text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-200 focus-visible:ring-opacity-75"
			>
				<h2>{{ title }}</h2>
				<ChevronUpIcon
					:class="open ? 'rotate-180 transform' : ''"
					class="h-5 w-5 text-gray-600"
				/>
			</DisclosureButton>

			<DisclosurePanel class="p-2 pb-4 text-sm text-gray-500"
				><slot></slot
			></DisclosurePanel>
		</Disclosure>
	</div>
</template>
