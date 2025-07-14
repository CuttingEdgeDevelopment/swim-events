<script setup>
  const props = defineProps(["eventLocation"]);
</script>

<template>
  <div v-if="(props.eventLocation).includes('CHN')" class="flag china">
    <div class="china__star"></div>
    <div class="china__small_star"></div>
    <div class="china__small_star"></div>
    <div class="china__small_star"></div>
    <div class="china__small_star"></div>
  </div>

  <div v-else-if="(props.eventLocation).includes('FRA')" class="flag france"></div>

  <div v-else-if="(props.eventLocation).includes('KOR')" class="flag south_korea">
    <div class="south_korea__center_circle"></div>

    <div class="south_korea__strips_1">
      <div class="strips">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="strips">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="south_korea__strips_2">
      <div class="strips">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="strips">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <p class="south_korea__invisible_brick"></p>
    <p class="south_korea__invisible_brick"></p>
  </div>

  <div v-else-if="(props.eventLocation).includes('GER')" class="flag germany"></div>

  <div v-else-if="(props.eventLocation).includes('HUN')" class="flag hungary"></div>

  <div v-else-if="(props.eventLocation).includes('LTU')" class="flag lithuania"></div>

  <div v-else-if="(props.eventLocation).includes('NOR')" class="flag norway"></div>

  <div v-else-if="(props.eventLocation).includes('POL')" class="flag poland"></div>

  <div v-else-if="(props.eventLocation).includes('ROU')" class="flag romania"></div>

  <div v-else-if="(props.eventLocation).includes('SRB')" class="flag serbia">
    <img src="https://imgur.com/7PtlQSE.png" width="37" alt="" />
  </div>

  <div v-else-if="(props.eventLocation).includes('SVK')" class="flag slovakia">
    <img src="https://imgur.com/JZWJjrF.png" width="42" alt="" />
  </div>

  <div v-else-if="(props.eventLocation).includes('SUI')" class="flag switzerland" :class="`event-${props.eventLocation}`"></div>

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
