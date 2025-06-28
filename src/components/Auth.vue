<script setup>
  import { ref, computed } from "vue";
  import SignUp from "./SignUp.vue";
  import SignIn from "./SignIn.vue";

  const isSignUp = ref(true);

  const buttonLabel = computed(() =>
    isSignUp.value
      ? `<p>Already have an account? <span class="font-bold">Sign In</span></p>`
      : `<p>Don't have an account yet? <span class="font-bold">Sign Up</span></p>`
  );
</script>

<template>
  <div class="px-16 py-8">
    <sign-up v-if="isSignUp" />
    <sign-in v-else />
    <button @click="isSignUp = !isSignUp">
      <span v-html="buttonLabel"></span>
    </button>
  </div>
</template>
