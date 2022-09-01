<script setup lang="ts"></script>

<template>
	<div class="mb-2 flex px-4">
		<input
			type="radio"
			name="hs-radio-vertical-group"
			class="mt-0.5 shrink-0 rounded-full border-gray-200 text-teal-600 focus:ring-teal-500"
			id="hs-radio-vertical-group-1"
			checked
		/>
		<label for="hs-radio-vertical-group-1" class="ml-2 text-sm text-gray-500"
			><slot></slot
		></label>
	</div>
</template>
