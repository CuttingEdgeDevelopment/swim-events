import { format } from "/node_modules/@formkit/tempo/dist/index.mjs";

const date = format(new Date(), "full");

let currentDateEl = document.getElementById("currentDate");

currentDateEl.textContent = date;
