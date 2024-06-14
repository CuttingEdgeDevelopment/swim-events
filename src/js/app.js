import { format, parse, diffDays } from "@formkit/tempo";

const eventsData = require("../data/events.json");

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
let eventsLoadingEl = document.getElementById("eventsLoading");

currentDayEl.textContent = "Happy " + day + "!";
currentDateEl.textContent = "Current Date: " + date;

function listEvents() {
  data.events.forEach(event => {
    let eventStartDate = parse(event.dateStart, "DD.MM.YYYY");
    let eventEndDate = parse(event.dateEnd, "DD.MM.YYYY");
    let startDate = format(eventStartDate, "dddd, MMMM DD, YYYY");
    let endDate = format(eventEndDate, "dddd, MMMM DD, YYYY");
    let countdown = diffDays(eventStartDate, currentDate);
    let daysPassed = diffDays(eventEndDate, currentDate);

    if (countdown < 0) {
      console.log(event.name + " ended " + daysPassed + " days ago.");
    } else {
      eventsSection = '<section class="event event-' + event.id + ' border border-black rounded-xl px-4 py-5 flex justify-between"><div id="eventInfo">';

      if (event.link === "") {
        eventsSection += '<h4 class="mb-2 text-xl font-normal">' + event.name + '</h4>';
      } else {
        eventsSection += '<h4 class="mb-2 text-xl font-normal hover:font-semibold"><a href="' + event.link + '" title="' + event.name + '" target="_blank">' + event.name + '</a></h4>';
      }

      eventsSection += '<p><span class="font-medium">Location:</span> ' + event.location + '</p>' +
        '<p><span class="font-medium">Begin:</span> ' + startDate + '</p>' +
        '<p><span class="font-medium">End:</span> ' + endDate + '</p></div><div id="eventCountdown" class="text-center">';

      if (countdown === 0) {
        eventsSection += '<p class="font-bold">Today is the day!</p></div></section>';
      } else if (countdown === 1) {
        eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">day to go</p>' + '</div></section>';
      } else {
        eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">days to go</p>' + '</div></section>';
      }
    }
    eventsListEl.insertAdjacentHTML("beforeend", eventsSection);
  });

}

window.addEventListener("load", event => {
  eventsLoadingEl.classList.remove("hidden");
  setTimeout(function() { eventsLoadingEl.classList.add("hidden") }, 1500);
  setTimeout(function() { listEvents() }, 2000);
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
