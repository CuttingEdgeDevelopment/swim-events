// Import to use for local development without internet access
// import { format, parse, diffDays } from "/node_modules/@formkit/tempo/dist/index.mjs";
// Import to use for deployement of application
import { format, parse, diffDays } from "https://cdn.jsdelivr.net/npm/@formkit/tempo/+esm";
import eventsData from "/src/data/events.json" with { type: 'json' };

const date = format(new Date(), "MMMM DD, YYYY");
const day = format(new Date(), "dddd");
const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.getElementById("btn-update");
let data = eventsData;
let eventsSection = "";
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let eventsListEl = document.getElementById("eventsList");
let currentDate = parse(date, "dddd DD MMMM YYYY");
let eventCountdownEl = document.getElementsByClassName("eventCountdown");
let eventsLoadingEl = document.getElementById("eventsLoading");

currentDayEl.textContent = "Happy " + day + "!";
currentDateEl.textContent = "Current Date: " + date;

function listEvents() {
  data.events.forEach(event => {
    let eventStartDate = parse(event.dateStart, "DD.MM.YYYY")
    let eventEndDate = parse(event.dateEnd, "DD.MM.YYYY")
    let countdown = diffDays(eventStartDate, currentDate);
    let daysPassed = diffDays(eventEndDate, currentDate);

    if (countdown < 0) {
      console.log(event.name + " ended " + daysPassed + " days ago.");
    } else {
      eventsSection = '<section class="event event-' + event.id + '">';

      if (event.link === "") {
        eventsSection += '<h4>' + event.name + '</h4>';
      } else {
        eventsSection += '<h4><a href="' + event.link + '" title="TEST" target="_blank">' + event.name + '</a></h4>';
      }

      eventsSection += '<p>Location: ' + event.location + '</p>' +
        '<p>Begin: ' + event.dateStart + '</p>' +
        '<p>End: ' + event.dateEnd + '</p>';

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
  eventsSection = "";
  eventsListEl.textContent = "";
  eventsLoadingEl.classList.remove("hidden");
  setTimeout(function() { eventsLoadingEl.classList.add("hidden") }, 1500);
  setTimeout(function() { listEvents() }, 2000);
});
