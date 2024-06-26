<template>
  <header class="px-16 pt-8">
    <h1 class="text-4xl mb-2 font-extrabold">{{ name }}</h1>
    <p id="currentDay" class="font-medium"></p>

    <TabGroup>
    <TabList>
      <Tab class="ui-selected:font-bold">Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
  </header>
</template>

<script setup>
  import { BeakerIcon } from '@heroicons/vue/24/solid'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<script>
  export default {
    data() {
      return {
        name: "Swim Events Countdown",
      };
    },
  };
</script>
