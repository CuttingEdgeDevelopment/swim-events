<template>
  <div class="text-xl font-bold">Hello {{ name }}! <BeakerIcon class="size-6 text-blue-500" /></div>

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
</template>

<script setup>
  import { BeakerIcon } from '@heroicons/vue/24/solid'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<script>
  export default {
    data() {
      return {
        name: "Vue",
      };
    },
  };
</script>
