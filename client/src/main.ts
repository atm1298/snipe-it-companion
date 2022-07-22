// main.js
import "v-calendar/dist/style.css";
import "./index.css";
import "preline/dist/hs-ui.bundle.js";

import { createPinia } from "pinia";
import VCalendar from "v-calendar";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// Use plugin with defaults
app.use(VCalendar, {});
