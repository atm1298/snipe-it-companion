import { defineStore } from "pinia";

const options = {
	weekday: "short",
	day: "numeric",
	month: "long",
	hour: "2-digit",
	minute: "2-digit",
};

const optionsSmall = {
	day: "numeric",
	month: "short",
	hour: "2-digit",
	minute: "2-digit",
};

export const useDateStore = defineStore({
	id: "date",
	state: () => ({
		start: null as Date | null,
		end: null as Date | null,
	}),
	getters: {
		formattedStart: state => state.start?.toLocaleString("de-DE", options),
		formattedEnd: state => state.end?.toLocaleString("de-DE", options),
		formattedStartSmall: state => state.start?.toLocaleString("de-DE", optionsSmall),
		formattedEndSmall: state => state.end?.toLocaleString("de-DE", optionsSmall),
	},

	actions: {
		setStart(date: Date) {
			this.start = date;
		},
		setEnd(date: Date) {
			this.end = date;
		},
	},
	persist: {
		afterRestore: ctx => {
			ctx.store.$state.start = ctx.store.$state.start
				? new Date(ctx.store.$state.start)
				: null;
			ctx.store.$state.end = ctx.store.$state.end
				? new Date(ctx.store.$state.end)
				: null;
		},
	},
});
