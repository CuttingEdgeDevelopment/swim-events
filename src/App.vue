<template>
  <Header :name="name" :currentDay="day" :currentDate="date" />
  <!-- Check if user is available in the store, if not show auth compoenent -->
  <Auth v-if="!store.state.user" />
  <!-- If user is available, show the main component -->
  <Main :events="events" :today="date" @update-events="fetchData" />
  <Footer />
</template>

<script setup>
  import Auth from "./components/Auth.vue";
  import Header from "./components/Header.vue";
  import Main from "./components/Main.vue";
  import Footer from "./components/Footer.vue";

  import { ref, onMounted } from 'vue'
  import { format } from "@formkit/tempo";
  import { supabase } from "./lib/supabaseClient";
  import { store } from "./lib/store";

  const name = "Swim Events Countdown";
  const date = format(new Date(), "MMMM DD, YYYY");
  const day = format(new Date(), "dddd");

  const events = ref([]);
  const user = ref()

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
    // Check if a user is logged in with Supabase
    supabase.auth.getUser().then(({ data: { user } }) => { store.state.user = user; });
    // Set up a listener to update the store when the user changes
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        store.state.user = null;
      } else {
        store.state.user = session?.user || null;
      }
    });
    fetchData();
  })
</script>
