<script setup lang="ts"></script>

<template>
	<div class="flex items-center">
		<input
			type="checkbox"
			class="ml-1 h-4 w-4 shrink-0 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
			id="hs-checkbox-group-1"
		/>
		<label for="hs-checkbox-group-1" class="text-base text-orange-500"
			><slot></slot
		></label>
	</div>
</template>
