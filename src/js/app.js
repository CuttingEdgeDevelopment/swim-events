import { createApp } from "vue";
import App from "../App.vue";

// Compile-Time Flags
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = true;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

const app = createApp(App);
app.mount("#app");
