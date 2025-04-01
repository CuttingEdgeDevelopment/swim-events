<script setup>
  defineProps(["name"]);
</script>

<template>
  <header class="px-16 pt-8">
    <h1 class="text-4xl mb-2 font-extrabold">{{ name }}</h1>
    <section class="header-info">
      <div class="flex gap-1.5 items-center justify-between">
        <div class="header-info-welcome">
          <p id="currentDay" class="font-medium">Happy {{ currentDay }}!</p>
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
</template>
