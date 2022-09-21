<script setup lang="ts">
import ContactListItem from "./ContactListItem.vue";

defineProps<{
	infos: {
		name: string;
		email: string;
		room: string;
	}[];
}>();
</script>

<template>
	<div class="mb-3 space-y-2">
		<h2>Kontaktinformationen</h2>
		<div class="space-y-2">
			<ContactListItem
				v-for="item in infos"
				:name="item.name"
				:key="item.name"
				:email="item.email"
				:room="item.room"
			>
			</ContactListItem>
		</div>
	</div>
</template>
