import { createApp } from "vue";
import App from "../App.vue";
import "../css/style.css";

/*  Compile-time flags
    Doc: https://vuejs.org/api/compile-time-flags.html */
globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
globalThis.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

const app = createApp(App);
app.mount("#app");
