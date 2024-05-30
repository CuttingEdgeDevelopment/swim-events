// import { format, parse, diffDays } from "/node_modules/@formkit/tempo/dist/index.mjs";
import { format, parse, diffDays } from "https://cdn.jsdelivr.net/npm/@formkit/tempo/+esm";
import eventsList from "/src/data/events.json" with { type: 'json' };

const date = format(new Date(), "MMM DD, YYYY");
const day = format(new Date(), "dddd");
let events = eventsList.events;
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let currentDate = parse(date, "dddd DD MMMM YYYY");
let eventDateEl = document.getElementsByClassName("eventDate");
let eventDate = parse(eventDateEl[0].textContent, "DD.MM.YYYY")
let eventCountdownEl = document.getElementsByClassName("eventCountdown");
let countdown = diffDays(eventDate, currentDate);

events.forEach(event => {
  console.log(event.name);
  console.log(event.dateStart);
});

currentDateEl.textContent = "Current Date: " + date;
currentDayEl.textContent = "Happy " + day + "!";
if (countdown === 0) {
  eventCountdownEl[0].textContent = "Today is the day!";
} else if (countdown === 1) {
  eventCountdownEl[0].textContent = countdown + " day to go!";
} else {
  eventCountdownEl[0].textContent = countdown + " days to go!";
}

/* Initial fetch function
-------------------------
function fetchJSONData() {
  fetch("./src/data/events.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Unable to fetch data:", error));
}

fetchJSONData();
*/
