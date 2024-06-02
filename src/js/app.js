// import { format, parse, diffDays } from "/node_modules/@formkit/tempo/dist/index.mjs";
import { format, parse, diffDays } from "https://cdn.jsdelivr.net/npm/@formkit/tempo/+esm";
import eventsList from "/src/data/events.json" with { type: 'json' };

const date = format(new Date(), "MMM DD, YYYY");
const day = format(new Date(), "dddd");
let events = eventsList.events;
let eventsSection = "";
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let eventsListEl = document.getElementById("eventsList");
let currentDate = parse(date, "dddd DD MMMM YYYY");
let eventCountdownEl = document.getElementsByClassName("eventCountdown");

currentDateEl.textContent = "Current Date: " + date;
currentDayEl.textContent = "Happy " + day + "!";

events.forEach(event => {
  let eventDate = parse(event.dateStart, "DD.MM.YYYY")
  let countdown = diffDays(eventDate, currentDate);
  eventsSection = '<section class="event">' +
    '<h4>' + event.name + '</h4>' +
    '<p>Date: <span class="eventDate">' + event.dateStart + '</span></p>';

  if (countdown === 0) {
    eventCountdownEl.textContent = "Today is the day!";
    eventsSection += '<p>Countdown: <span class="eventCountdown">' + eventCountdownEl.textContent + '</span></p>' + '</section>';
  } else if (countdown === 1) {
    eventCountdownEl.textContent = countdown + " day to go!";
    eventsSection += '<p>Countdown: <span class="eventCountdown">' + eventCountdownEl.textContent + '</span></p>' + '</section>';
  } else {
    eventCountdownEl.textContent = countdown + " days to go!";
    eventsSection += '<p>Countdown: <span class="eventCountdown">' + eventCountdownEl.textContent + '</span></p>' + '</section>';
  }

  eventsListEl.insertAdjacentHTML("beforeend", eventsSection);
});

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
