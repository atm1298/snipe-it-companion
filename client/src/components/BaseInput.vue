<script setup lang="ts"></script>

<template>
	<div class="">
		<label for="email-address" class="block"><slot></slot></label>
		<input
			type="text"
			name="email-address"
			id="email-address"
			autocomplete="email"
			class="block w-full rounded-md border-gray-300 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
		/>
	</div>
</template>
