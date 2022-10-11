<script setup lang="ts">
interface Props {
	name: string;
}
const props = defineProps<Props>();
</script>

<template>
	<button
		type="button"
		class="active relative min-w-0 flex-1 overflow-hidden border-l border-b-2 bg-white p-4 text-center text-sm font-medium text-gray-500 text-gray-600 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 hs-tab-active:border-b-orange-600 hs-tab-active:font-semibold hs-tab-active:text-gray-900"
		id="bar-with-underline-item-1"
		dataHsTab
		ariaControls
		role="tab"
	>
		{{ name }}
	</button>
</template>
