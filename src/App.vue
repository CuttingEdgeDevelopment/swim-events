<template>
  <Header :name="app.name" :currentDay="app.currentDay" :currentDate="app.currentDate" />
  <main class="px-16 py-8">
    <div id="eventsLoading" class="flex italic font-bold text-red-700 gap-0.5">
          <p id="eventsLoadingText">Loading events</p>
            <span class="animate-bounce [animation-delay:-0.3s]">.</span>
            <span class="animate-bounce [animation-delay:-0.15s]">.</span>
            <span class="animate-bounce">.</span>
        </div>
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
        <TabPanel>
          <section id="eventsList" class="flex flex-col gap-3">
            <div v-for="event in events" :key="event.id">
              <section :class="eventID(event.id)" class="event border border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300" v-if="!compareDates(app.compareDate, event.dateEnd)">
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
                <div id="eventCountdown" class="text-center" v-if="countdown(event.dateStart, app.compareDate) < 0">
                  <FireIcon class="size-20 m-auto stroke-red-700 stroke-[1.5]" />
                  <p class="font-bold">Ongoing!</p>
                </div>
                <div id="eventCountdown" class="text-center" v-else>
                  <p class="text-7xl">{{ countdown(event.dateStart, app.compareDate) }}</p>
                  <p class="font-bold">days to go</p>
                </div>
              </section>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <ul v-for="event in events" :key="event.id">
            <li v-if="compareDates(app.compareDate, event.dateEnd)">
              <span>
                {{ event.name }} ended {{ daysAfterEvent(app.compareDate, event.dateEnd) }} days ago
              </span>
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </main>
  <Footer />
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
  import Header from "./Header.vue";
  import Footer from "./Footer.vue";
  import { format, parse, diffDays, isAfter } from "@formkit/tempo";

  const date = format(new Date(), "MMMM DD, YYYY");
  const dateCompare = format(new Date(), "YYYY-MM-DD");
  const day = format(new Date(), "dddd");

  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        app: {
          name: "Swim Events Countdown",
          currentDay: day,
          currentDate: date,
          compareDate: dateCompare,
        }
      };
    },
  };
</script>
