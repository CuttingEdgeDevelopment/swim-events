import { format, parse, diffDays } from "/node_modules/@formkit/tempo/dist/index.mjs";

const date = format(new Date(), "MMM DD, YYYY");
const day = format(new Date(), "dddd");
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let currentDate = parse(date, "dddd DD MMMM YYYY");
let eventDateEl = document.getElementsByClassName("eventDate");
let eventDate = parse(eventDateEl[0].textContent, "DD.MM.YYYY")
let eventCountdownEl = document.getElementsByClassName("eventCountdown");
let countdown = diffDays(eventDate, currentDate);

currentDateEl.textContent = "Current Date: " + date;
currentDayEl.textContent = "Happy " + day + "!";
if (countdown === 0) {
  eventCountdownEl[0].textContent = "Today is the day!";
} else if (countdown === 1) {
  eventCountdownEl[0].textContent = countdown + " day to go!";
} else {
  eventCountdownEl[0].textContent = countdown + " days to go!";
}
