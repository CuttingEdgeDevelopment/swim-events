<template>
  <Header :name="name" :currentDay="day" :currentDate="date" />
  <Main :events="events" :today="date" @update-events="fetchData" />
  <Footer />
</template>

<script setup>
  import Header from "./Header.vue";
  import Main from "./Main.vue";
  import Footer from "./Footer.vue";

  import { ref, onMounted } from 'vue'
  import { format } from "@formkit/tempo";
  import { supabase } from "./lib/supabaseClient";

  const name = "Swim Events Countdown";
  const date = format(new Date(), "MMMM DD, YYYY");
  const day = format(new Date(), "dddd");

  const events = ref([]);

  async function fetchData() {
    const { data, error } = await supabase.from("events").select("*").order("dateStart", { ascending: true })

    if (error) {
      console.error("Error fetching data:", error);
      return;
    }

    console.log("Fetched data:", data);;
    events.value = data
  }

  onMounted(() => {
    fetchData();
  })
</script>
