<template>
  <Header :name="name" :currentDay="day" :currentDate="date" />
  <Main :events="events" />
  <Footer />
</template>

<script setup>
  import Header from "./Header.vue";
  import Main from "./Main.vue";
  import Footer from "./Footer.vue";

  import { ref, onMounted } from 'vue'
  import { format, parse, diffDays, isAfter } from "@formkit/tempo";
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { supabase } from "./lib/supabaseClient";

  const name = "Swim Events Countdown";
  const date = format(new Date(), "MMMM DD, YYYY");
  const day = format(new Date(), "dddd");

  const events = ref([]);

  async function getEvents() {
    const { data } = await supabase.from('events').select()
    events.value = data
  }

  onMounted(() => {
    getEvents()
  })
</script>
