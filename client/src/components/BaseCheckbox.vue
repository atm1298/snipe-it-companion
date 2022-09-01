<script setup lang="ts"></script>

<template>
	<div class="mb-2 flex px-4">
		<input
			type="checkbox"
			class="mt-0.5 shrink-0 rounded border-gray-200 text-teal-600 focus:ring-teal-500"
			id="hs-checkbox-group-1"
		/>
		<label for="hs-checkbox-group-1" class="ml-3 text-sm text-gray-500"
			><slot></slot
		></label>
	</div>
</template>
