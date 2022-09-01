// main.js
import "v-calendar/dist/style.css";
import "./index.css";
import "preline/dist/hs-ui.bundle.js";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VCalendar from "v-calendar";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(router);

app.mount("#app");

// Use plugin with defaults
app.use(VCalendar, {});
