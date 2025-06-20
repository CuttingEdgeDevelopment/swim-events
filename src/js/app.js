import { createApp } from "vue";
import App from "../App.vue";
import SimpleAnalytics from "simple-analytics-vue";

// Compile-Time Flags
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = true;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

const app = createApp(App);
app.use(SimpleAnalytics, { skip: process.env.NODE_ENV !== "production" }).mount("#app");
