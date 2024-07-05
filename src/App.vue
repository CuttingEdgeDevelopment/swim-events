<template>
  <header class="px-16 pt-8">
    <h1 class="text-4xl mb-2 font-extrabold">{{ name }}</h1>
    <section class="header-info">
      <div class="flex gap-1.5 items-center justify-between">
        <div class="header-info-welcome">
          <p id="currentDay" class="font-medium">Happy {{ currentDay }}</p>
          <p id="currentDate" class="italic text-sm">Current Date: {{ currentDate }}</p>
        </div>
        <div class="flex gap-0.5">
          <button @click="addEvent()" id="btn-add" title="Add an Event" class="h-6 w-6 border-none">
            <span class="hidden">Add Event</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <button @click="updateEvents()" id="btn-update" title="Update Events" class="h-6 w-6">
            <span class="hidden">Update Events</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </header>
  <main class="px-16 py-8">
    <TabGroup>
      <TabList>
        <Tab>
          <h2 class="text-2xl font-semibold pr-2 ui-not-selected:text-neutral-500">Upcoming Events</h2>
        </Tab>
        <Tab>
          <h2 class="text-2xl font-semibold pl-2 ui-not-selected:text-neutral-500">Past Events</h2>
        </Tab>
      </TabList>
      <TabPanels>
        <div id="eventsLoading" class="flex italic font-bold text-red-700 gap-0.5" v-show="eventsLoading">
          <p>Loading events</p>
            <span class="animate-bounce [animation-delay:-0.3s]">.</span>
            <span class="animate-bounce [animation-delay:-0.15s]">.</span>
            <span class="animate-bounce">.</span>
        </div>
        <TabPanel>
          <section id="eventsList" class="flex flex-col gap-3">
            <div v-for="event in events" :key="event.id">
              <section :class="eventID(event.id)" class="event border border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300" v-if="!compareDates(compareDate, event.dateEnd)">
                <div id="eventInfo" v-if="event.link != ''">
                  <h4 class="mb-2 text-xl font-medium">{{ event.name }}<a :href="event.link" title="{{ event.name }}" target="_blank" class="hover:text-indigo-700"><LinkIcon class="inline ml-2 stroke-[3.0] size-4 hover:text-indigo-700" /></a></h4>
                  <p><span class="font-medium">Location: </span>{{ event.location }}</p>
                  <p><span class="font-medium">Begin:</span> {{ format(event.dateStart, "dddd, MMMM DD, YYYY") }}</p>
                  <p><span class="font-medium">End:</span> {{ format(event.dateEnd, "dddd, MMMM DD, YYYY") }}</p>
                </div>
                <div id="eventInfo" v-else>
                  <h4 class="mb-2 text-xl font-medium">{{ event.name }}</h4>
                  <p><span class="font-medium">Location: </span>{{ event.location }}</p>
                  <p><span class="font-medium">Begin:</span> {{ format(event.dateStart, "dddd, MMMM DD, YYYY") }}</p>
                  <p><span class="font-medium">End:</span> {{ format(event.dateEnd, "dddd, MMMM DD, YYYY") }}</p>
                </div>
                <div id="eventCountdown" class="text-center" v-if="countdown(event.dateStart, compareDate) < 0">
                  <FireIcon class="size-20 m-auto stroke-red-700 stroke-[1.5]" />
                  <p class="font-bold">Ongoing!</p>
                </div>
                <div id="eventCountdown" class="text-center" v-else>
                  <p class="text-7xl">{{ countdown(event.dateStart, compareDate) }}</p>
                  <p class="font-bold">days to go</p>
                </div>
              </section>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <ul v-for="event in events" :key="event.id">
            <li v-if="compareDates(compareDate, event.dateEnd)">
              <span>
                {{ event.name }} ended {{ daysAfterEvent(compareDate, event.dateEnd) }} days ago
              </span>
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </main>
</template>

<script setup>
  import { LinkIcon, RocketLaunchIcon, FireIcon } from '@heroicons/vue/24/outline'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { ref, onMounted } from 'vue'
  import { supabase } from "./lib/supabaseClient";

  const events = ref([]);
  const eventsLoading = ref(false);

  async function fetchData() {
    const { data, error } = await supabase.from("events").select("*").order("dateStart", { ascending: true });

    if (error) {
      console.error('Error fetching data:', error);
      return;
    }

    console.log('Fetched data:', data);
    events.value = data;
  }

  function compareDates(firstDate, secondDate) {
    const eventPassed = isAfter(firstDate, secondDate);
    return eventPassed;
  }

  function countdown(currentDate, startDate) {
    const daysToGo = diffDays(currentDate, startDate);
    return daysToGo;
  }

  function daysAfterEvent(endDate, currentDate) {
    const daysPassed = diffDays(endDate, currentDate);
    return Math.abs(daysPassed);
  }

  function eventID(id) {
    return "event-" + id;
  }

  function updateEvents() {
    console.log("This button will update the events");
    eventsLoading.value = true;
    setTimeout(() => {
      fetchData();
      eventsLoading.value = false;
    }, 1000);
  }

  function addEvent() {
    console.log("This button will add a new event");
  }

  onMounted(() => {
    fetchData();
  });
</script>

<script>
  import { format, parse, diffDays, isAfter } from "@formkit/tempo";

  const date = format(new Date(), "MMMM DD, YYYY");
  const dateCompare = format(new Date(), "YYYY-MM-DD");
  const day = format(new Date(), "dddd");

  export default {
    data() {
      return {
        name: "Swim Events Countdown",
        currentDay: day,
        currentDate: date,
        compareDate: dateCompare,
      };
    },
  };
</script>
