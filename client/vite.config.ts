import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), Pages()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		cors: true,
		host: "localhost",
	},
});
