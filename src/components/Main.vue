<script setup>
  const props = defineProps(["events", "today"]);
  const emit = defineEmits(["update-events"]);

  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { LinkIcon, RocketLaunchIcon, FireIcon } from '@heroicons/vue/24/outline'
  import { format, diffDays, parse } from "@formkit/tempo";
  import { computed, ref, watch } from "vue";

  const upcomingEvents = computed(() => props.events.filter(event => daysPassed(event.dateEnd) >= 0));
  const pastEvents = computed(() => props.events.filter(event => daysPassed(event.dateEnd) < 0));
  const loadingEvents = ref(true);
  const loadingText = ref("Loading events");

  watch(() => props.events, (newVal) => {
    if (newVal && newVal.length > 0) {
      loadingEvents.value = false;
      loadingText.value = "Loading events";
    }
  });

  function calculateCountdown(eventStart) {
    const currentDate = parse(props.today, "dddd DD MMMM YYYY");
    const eventStartDate = parse(eventStart, "YYYY-MM-DD");
    return diffDays(eventStartDate, currentDate);
  }

  function daysPassed(eventEnd) {
    const currentDate = parse(props.today, "dddd DD MMMM YYYY");
    const eventEndDate = parse(eventEnd, "YYYY-MM-DD");
    return diffDays(eventEndDate, currentDate);
  }

  function onUpdateEvents() {
    loadingText.value = "Updating events";
    loadingEvents.value = true;
    emit('update-events');
  }
</script>

<template>
  <main class="px-16 py-8">
      <TabGroup>
        <TabList class="tabList">
          <Tab class="tabButton">
            <h2 class="text-2xl font-semibold">Upcoming Events</h2>
          </Tab>
          <Tab class="tabButton">
            <h2 class="text-2xl font-semibold">Past Events</h2>
          </Tab>
          <div class="flex gap-0.5">
            <button id="btn-update" title="Update Events" class="h-6 w-6" @click="onUpdateEvents">
              <span class="hidden">Update Events</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </button>
            <button id="btn-add" title="Add an Event" class="h-6 w-6 border-none">
              <span class="hidden">Add Event</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </TabList>
        <div id="eventsLoading" v-if="loadingEvents" class="flex italic font-bold text-red-700 gap-0.5">
        <p id="eventsLoadingText">{{ loadingText }}</p>
          <span class="animate-bounce [animation-delay:-0.3s]">.</span>
          <span class="animate-bounce [animation-delay:-0.15s]">.</span>
          <span class="animate-bounce">.</span>
      </div>
        <TabPanels>
          <TabPanel>
            <section id="eventsList" class="flex flex-col gap-3 pt-3">
              <div v-for="event in upcomingEvents" :key="event.id">
                <section v-if="calculateCountdown(event.dateStart) <= 0" :class="`event-${event.id}`" class="event border-2 border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300">
                  <div id="eventInfo">
                    <h4 class="mb-2 text-xl font-medium" v-if="event.link == ''">{{event.name}}</h4>
                    <h4 class="mb-2 text-xl font-medium" v-else>{{event.name}}<a :href="event.link" :title="event.name" target="_blank" class="hover:text-indigo-700"><LinkIcon class="size-4 inline ml-2 stroke-[3.0] stroke-current"/></a></h4>
                    <p><span class="font-medium">Location:</span> {{event.location}}</p>
                    <p><span class="font-medium">Begin:</span> {{format(event.dateStart, "dddd, MMMM DD, YYYY")}}</p>
                    <p><span class="font-medium">End:</span> {{format(event.dateEnd, "dddd, MMMM DD, YYYY")}}</p>
                  </div>
                  <span v-if="event.location.includes('SUI')">
                    <div class="flag" :class="`event-${event.id}`"></div>
                  </span>
                  <div id="eventCountdown" class="text-center">
                    <div v-if="calculateCountdown(event.dateStart) < 0">
                      <FireIcon class="size-20 m-auto stroke-[1.5] stroke-[#b91c1c]" />
                      <p class="font-bold">Ongoing!</p>
                    </div>
                    <div v-else-if="calculateCountdown(event.dateStart) == 0">
                      <RocketLaunchIcon class="size-20 m-auto stroke-[1.5] stroke-[#15803d]" />
                      <p class="font-bold">Today is the day!</p>
                    </div>
                    <div v-else-if="calculateCountdown(event.dateStart) == 1">
                      <p class="text-7xl">{{calculateCountdown(event.dateStart)}}</p>
                      <p class="font-bold">day to go</p>
                    </div>
                    <div v-else>
                      <p class="text-7xl">{{calculateCountdown(event.dateStart)}}</p>
                      <p class="font-bold">days to go</p>
                    </div>
                  </div>
                </section>
                <section v-else :class="`event-${event.id}`" class="event border border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300">
                  <div id="eventInfo">
                    <h4 class="mb-2 text-xl font-medium" v-if="event.link == ''">{{event.name}}</h4>
                    <h4 class="mb-2 text-xl font-medium" v-else>{{event.name}}<a :href="event.link" :title="event.name" target="_blank" class="hover:text-indigo-700"><LinkIcon class="size-4 inline ml-2 stroke-[3.0] stroke-current"/></a></h4>
                    <p><span class="font-medium">Location:</span> {{event.location}}</p>
                    <p><span class="font-medium">Begin:</span> {{format(event.dateStart, "dddd, MMMM DD, YYYY")}}</p>
                    <p><span class="font-medium">End:</span> {{format(event.dateEnd, "dddd, MMMM DD, YYYY")}}</p>
                  </div>
                  <span v-if="event.location.includes('SUI')">
                    <div class="flag" :class="`event-${event.id}`"></div>
                  </span>
                  <div id="eventCountdown" class="text-center">
                    <div v-if="calculateCountdown(event.dateStart) < 0">
                      <FireIcon class="size-20 m-auto stroke-[1.5] stroke-[#b91c1c]" />
                      <p class="font-bold">Ongoing!</p>
                    </div>
                    <div v-else-if="calculateCountdown(event.dateStart) == 0">
                      <RocketLaunchIcon class="size-20 m-auto stroke-[1.5] stroke-[#15803d]" />
                      <p class="font-bold">Today is the day!</p>
                    </div>
                    <div v-else-if="calculateCountdown(event.dateStart) == 1">
                      <p class="text-7xl">{{calculateCountdown(event.dateStart)}}</p>
                      <p class="font-bold">day to go</p>
                    </div>
                    <div v-else>
                      <p class="text-7xl">{{calculateCountdown(event.dateStart)}}</p>
                      <p class="font-bold">days to go</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section id="eventsList" class="flex gap-3 pt-3 flex-col-reverse">
              <div v-for="event in pastEvents" :key="event.id">
                <section :class="`event-${event.id}`" class="event border border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300">
                  <div id="eventInfo">
                    <h4 class="mb-2 text-xl font-medium" v-if="event.link == ''">{{event.name}}</h4>
                    <h4 class="mb-2 text-xl font-medium" v-else>{{event.name}}<a :href="event.link" :title="event.name" target="_blank" class="hover:text-indigo-700"><LinkIcon class="size-4 inline ml-2 stroke-[3.0] stroke-current"/></a></h4>
                    <p><span class="font-medium">Location:</span> {{event.location}}</p>
                    <p><span class="font-medium">Began:</span> {{format(event.dateStart, "dddd, MMMM DD, YYYY")}}</p>
                    <p><span class="font-medium">Ended:</span> {{format(event.dateEnd, "dddd, MMMM DD, YYYY")}}</p>
                  </div>
                  <div id="eventCountdown" class="text-center">
                    <div v-if="Math.abs(calculateCountdown(event.dateEnd)) == 1">
                      <p class="text-7xl">{{Math.abs(calculateCountdown(event.dateEnd))}}</p>
                      <p class="font-bold">day ago</p>
                    </div>
                    <div v-else>
                      <p class="text-7xl">{{Math.abs(calculateCountdown(event.dateEnd))}}</p>
                      <p class="font-bold">days ago</p>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </TabPanel>
        </TabPanels>
      </TabGroup>
  </main>
</template>
