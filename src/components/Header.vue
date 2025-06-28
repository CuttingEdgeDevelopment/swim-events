<script setup>
  defineProps(["name", "currentDay", "currentDate"]);
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
      </div>
    </section>
  </header>
</template>
