import { format, parse, diffDays } from "@formkit/tempo";
import { createClient } from '@supabase/supabase-js';

const eventsData = require("../data/events.json");
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const date = format(new Date(), "MMMM DD, YYYY");
const day = format(new Date(), "dddd");
const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.getElementById("btn-update");

const rocket = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#15803d" class="size-20 m-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>';
const fire = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#b91c1c" class="size-20 m-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /></svg>';

let data = eventsData;
let eventsSection = "";
let currentDateEl = document.getElementById("currentDate");
let currentDayEl = document.getElementById("currentDay");
let eventsListEl = document.getElementById("eventsList");
let currentDate = parse(date, "dddd DD MMMM YYYY");
let eventsLoadingEl = document.getElementById("eventsLoading");

currentDayEl.textContent = "Happy " + day + "!";
currentDateEl.textContent = "Current Date: " + date;

async function fetchData() {
  const { data, error } = await supabase.from("events").select("*").order("dateStart", { ascending: true });

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  console.log('Fetched data:', data);
  return data;
}

async function displayData() {
  try {
    const supabaseData = await fetchData();
    console.log('Display data:', supabaseData);
    listEvents2(supabaseData);
  } catch (error) {
    console.error('Failed to fetch or display data:', error);
  }
}

function listEvents() {
  data.events.forEach(event => {
    let eventStartDate = parse(event.dateStart, "DD.MM.YYYY");
    let eventEndDate = parse(event.dateEnd, "DD.MM.YYYY");
    let startDate = format(eventStartDate, "dddd, MMMM DD, YYYY");
    let endDate = format(eventEndDate, "dddd, MMMM DD, YYYY");
    let countdown = diffDays(eventStartDate, currentDate);
    let daysPassed = diffDays(eventEndDate, currentDate);

    if (daysPassed < 0) {
      console.log(event.name + " ended " + Math.abs(daysPassed) + " days ago.");
    } else {
      if (countdown <= 0) {
        eventsSection = '<section class="event event-' + event.id + ' border-2 border-black rounded-xl px-4 py-5 flex justify-between"><div id="eventInfo">';
      } else {
        eventsSection = '<section class="event event-' + event.id + ' border border-black rounded-xl px-4 py-5 flex justify-between"><div id="eventInfo">';
      }

      if (event.link === "") {
        eventsSection += '<h4 class="mb-2 text-xl font-normal">' + event.name + '</h4>';
      } else {
        eventsSection += '<h4 class="mb-2 text-xl font-normal hover:font-semibold"><a href="' + event.link + '" title="' + event.name + '" target="_blank">' + event.name + '</a></h4>';
      }

      eventsSection += '<p><span class="font-medium">Location:</span> ' + event.location + '</p>' +
        '<p><span class="font-medium">Begin:</span> ' + startDate + '</p>' +
        '<p><span class="font-medium">End:</span> ' + endDate + '</p></div><div id="eventCountdown" class="text-center">';

      if (countdown < 0) {
        eventsSection += fire + '<p class="font-bold">Ongoing!</p></div></section>';
      } else if (countdown === 0) {
        eventsSection += rocket + '<p class="font-bold">Today is the day!</p></div></section>';
      } else if (countdown === 1) {
        eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">day to go</p>' + '</div></section>';
      } else {
        eventsSection += '<p class="text-7xl">' + countdown + '</p><p class="font-bold">days to go</p>' + '</div></section>';
      }
    }
    eventsListEl.insertAdjacentHTML("beforeend", eventsSection);
  });
}

function listEvents2(supabaseEvents) {
  supabaseEvents.forEach(event => {
    let eventStartDate = parse(event.dateStart, "YYYY-MM-DD");
    let eventEndDate = parse(event.dateEnd, "YYYY-MM-DD");
    let startDate = format(eventStartDate, "dddd, MMMM DD, YYYY");
    let endDate = format(eventEndDate, "dddd, MMMM DD, YYYY");
    let countdown = diffDays(eventStartDate, currentDate);
    let daysPassed = diffDays(eventEndDate, currentDate);

    if (daysPassed < 0) {
      console.log(event.name + " ended " + Math.abs(daysPassed) + " days ago.");
    } else {
      if (countdown <= 0) {
        eventsSection = '<section class="event event-' + event.id + ' border-2 border-black rounded-xl px-4 py-5 flex justify-between"><div id="eventInfo">';
      } else {
        eventsSection = '<section class="event event-' + event.id + ' border border-black rounded-xl px-4 py-5 flex justify-between"><div id="eventInfo">';
      }

      if (event.link === "") {
        eventsSection += '<h4 class="mb-2 text-xl font-normal">' + event.name + '</h4>';
      } else {
        eventsSection += '<h4 class="mb-2 text-xl font-normal hover:font-semibold"><a href="' + event.link + '" title="' + event.name + '" target="_blank">' + event.name + '</a></h4>';
      }

      eventsSection += '<p><span class="font-medium">Location:</span> ' + event.location + '</p>' +
        '<p><span class="font-medium">Begin:</span> ' + startDate + '</p>' +
        '<p><span class="font-medium">End:</span> ' + endDate + '</p></div><div id="eventCountdown" class="text-center">';

      if (countdown < 0) {
        eventsSection += fire + '<p class="font-bold">Ongoing!</p></div></section>';
      } else if (countdown === 0) {
        eventsSection += rocket + '<p class="font-bold">Today is the day!</p></div></section>';
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
  // setTimeout(function() { listEvents() }, 2000);
  setTimeout(function() { displayData() }, 2000);
});

btnAdd.addEventListener("click", event => {
  console.log("This button will add a new event");
});

btnUpdate.addEventListener("click", event => {
  eventsSection = "";
  eventsListEl.textContent = "";
  eventsLoadingEl.classList.remove("hidden");
  setTimeout(function() { eventsLoadingEl.classList.add("hidden") }, 1500);
  // setTimeout(function() { listEvents() }, 2000);
  setTimeout(function() { displayData() }, 2000);
});
