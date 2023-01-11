<script setup>
import { store } from "../store";

const emit = defineEmits(["viewContact"]);

const addContact = () => {
  store.resetCurrent();
  emit("viewContact");
};
const editContact = (contact) => {
  store.setCurrent(contact);
  emit("viewContact", contact);
};
</script>

<template>
  <div class="flex flex-col w-full items-start">
    <header
      class="flex w-full justify-between items-center my-2 border-b border-zinc-600 pb-2"
    >
      <p>Contacts</p>
      <button
        @click="addContact"
        class="flex items-center justify-center text-lg px-2 py-0.5 leading-none border border-zinc-600"
      >
        +
      </button>
    </header>
    <main>
      <div v-for="contact in store.contacts">
        <button class="px-4 py-2" @click="editContact(contact)">
          {{ contact.firstName }} {{ contact.lastName }}
        </button>
      </div>
    </main>
  </div>
</template>
