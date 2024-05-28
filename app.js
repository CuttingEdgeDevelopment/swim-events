import { format, diffDays } from "/node_modules/@formkit/tempo/dist/index.mjs";

const date = format(new Date(), "full");
let currentDateEl = document.getElementById("currentDate");
let eventDateEl = document.getElementsByClassName("eventDate");
let eventCountdownEl = document.getElementsByClassName("eventCountdown");
let countdown = diffDays("2024-05-29", "2024-05-28");

currentDateEl.textContent = date;
eventCountdownEl[0].textContent = countdown;
