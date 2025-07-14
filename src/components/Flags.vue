<script setup>
  const props = defineProps(["eventLocation"]);
  console.log(props.eventLocation);
</script>

<template>
  <div v-if="(props.eventLocation).includes('SUI')" class="flag switzerland" :class="`event-${props.eventLocation}`"></div>

  <div v-else-if="(props.eventLocation).includes('SGP')" class="flag singapore">
    <div class="singapore__moon">
      <div class="singapore__star"></div>
        <div class="singapore__middle_stars">
          <div class="singapore__star"></div>
          <div class="singapore__star"></div>
        </div>
      <div class="singapore__bottom_stars">
        <div class="singapore__star"></div>
        <div class="singapore__star"></div>
      </div>
    </div>
  </div>
</template>
