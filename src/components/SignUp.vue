<script setup>
import { ref } from "vue";
import { supabase } from "../lib/supabaseClient";
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const email = ref("");
const password = ref("");

const handleSignup = async () => {
  try {
    // Use the Supabase provided method to handle the signup
    const { error } = await supabase.auth.signUp({ email: email.value, password: password.value })
    if (error) throw error
  } catch (error) {
    if (error instanceof Error) {
      alert(error.error_description || error.message)
    }
  }
  return { email, password, handleSignup };
}
</script>

<template>
  <div>
    <h2>Sign up for an account</h2>
    <form @submit.prevent="handleSignup" class="flex gap-3">
      <div>
        <label for="email" class="pr-1">Email</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password" class="pr-1">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div>
        <button type="submit" class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <CheckCircleIcon class="-ml-0.5 size-5" aria-hidden="true" />
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>
