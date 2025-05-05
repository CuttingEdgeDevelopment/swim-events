<script setup>
  defineProps(["events"]);

  import { LinkIcon, RocketLaunchIcon, FireIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <main class="px-16 py-8">
    <div class="flex mb-5 gap-1.5 items-center">
        <h2 class="text-2xl font-semibold">Upcoming Events</h2>
        <div class="flex gap-0.5">
          <button id="btn-add" title="Add an Event" class="h-6 w-6 border-none">
            <span class="hidden">Add Event</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          <button id="btn-update" title="Update Events" class="h-6 w-6">
            <span class="hidden">Update Events</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
      </div>
      <div class='flex justify-center items-center italic font-bold text-red-700 gap-0.5'>
        <p>Loading</p>
          <span class='animate-bounce [animation-delay:-0.3s]'>.</span>
          <span class='animate-bounce [animation-delay:-0.15s]'>.</span>
          <span class='animate-bounce'>.</span>
      </div>
      <p id="eventsLoading" class="hidden italic font-bold text-red-700">Loading events ...</p>
      <section id="eventsList" class="flex flex-col gap-3" v-for="event in events">
        <section class="event border border-black rounded-xl px-4 py-5 flex justify-between hover:drop-shadow hover:shadow-md hover:shadow-indigo-300">
          <div id="eventInfo">
            <h4 class="mb-2 text-xl font-medium">{{event.name}}<a :href="event.link" :title="event.name" target="_blank" class="hover:text-indigo-700"><LinkIcon class="size-4 inline ml-2 stroke-[3.0] stroke-current"/></a></h4>
            <p><span class="font-medium">Location:</span> {{event.location}}</p>
            <p><span class="font-medium">Begin:</span> {{event.dateStart}}</p>
            <p><span class="font-medium">End:</span> {{event.dateEnd}}</p>
            <div id="eventCountdown" class="text-center">
              <p class="text-7xl">99</p>
              <p class="font-bold">days to go</p>
            </div>
          </div>
        </section>
      </section>
  </main>
</template>
