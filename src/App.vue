<script setup>
import { ref } from "vue";
import Contact from "./components/Contact.vue";
import ContactList from "./components/ContactList.vue";

const showContactForm = ref(false);
</script>

<template>
  <div
    class="relative flex w-full max-w-lg mx-auto min-h-screen px-4 bg-white text-sky-900 border border-t-0 border-b-0 border-zinc-600"
  >
    <ContactList @viewContact="showContactForm = true" />
    <Contact v-if="showContactForm" @close="showContactForm = false" />
  </div>
</template>
