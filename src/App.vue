<template>
  <Header :name="name" :currentDay="day" :currentDate="date" />
  <Main />
  <Footer />
</template>

<script setup>
  import Header from "./Header.vue";
  import Main from "./Main.vue";
  import Footer from "./Footer.vue";

  import { format, parse, diffDays, isAfter } from "@formkit/tempo";
  import { LinkIcon, RocketLaunchIcon, FireIcon } from '@heroicons/vue/24/outline'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { supabase } from "./lib/supabaseClient";

  const name = "Swim Events Countdown";
  const date = format(new Date(), "MMMM DD, YYYY");
  const day = format(new Date(), "dddd");
</script>
