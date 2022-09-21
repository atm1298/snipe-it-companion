<script setup lang="ts"></script>

<template>
	<div class="flex items-center">
		<input
			id="push-everything"
			name="push-notifications"
			type="radio"
			class="ml-1 h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500"
		/>
		<label for="push-nothing" class="ml-3 block text-base"><slot></slot></label>
	</div>
</template>
