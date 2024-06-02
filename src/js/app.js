// import { format, parse, diffDays } from "/node_modules/@formkit/tempo/dist/index.mjs";
import { format, parse, diffDays } from "https://cdn.jsdelivr.net/npm/@formkit/tempo/+esm";
import eventsList from "/src/data/events.json" with { type: 'json' };

const date = format(new Date(), "MMMM DD, YYYY");
const day = format(new Date(), "dddd");
const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.getElementById("btn-update");
let events = eventsList.events;
let eventsSection = "";
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let eventsListEl = document.getElementById("eventsList");
let currentDate = parse(date, "dddd DD MMMM YYYY");
let eventCountdownEl = document.getElementsByClassName("eventCountdown");

currentDayEl.textContent = "Happy " + day + "!";
currentDateEl.textContent = "Current Date: " + date;

function listEvents() {
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
      eventCountdownEl.textContent = countdown + " day to go";
      eventsSection += '<p>Countdown: <span class="eventCountdown">' + eventCountdownEl.textContent + '</span></p>' + '</section>';
    } else {
      eventCountdownEl.textContent = countdown + " days to go";
      eventsSection += '<p>Countdown: <span class="eventCountdown">' + eventCountdownEl.textContent + '</span></p>' + '</section>';
    }

    eventsListEl.insertAdjacentHTML("beforeend", eventsSection);
  });
}

window.addEventListener("load", event => {
  listEvents();
});

btnAdd.addEventListener("click", event => {
  console.log("This button will add a new event");
});

btnUpdate.addEventListener("click", event => {
  eventsListEl.textContent = "";
  listEvents();
});
