<script setup>
import { ref, onMounted } from "vue";
import { store } from "../store";

const firstNameElem = ref();
const id = ref(store.current ? store.current.id : "");
const firstName = ref(store.current ? store.current.firstName : "");
const lastName = ref(store.current ? store.current.lastName : "");
const phone = ref(store.current ? store.current.phone : "");

const emit = defineEmits(["close"]);

onMounted(() => firstNameElem.value.focus());

const deleteContact = () => {
  store.setCurrent({
    id: id.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
  });

  store.deleteContact();

  emit("close");
};

const saveContact = () => {
  if (
    !firstName.value.length ||
    !lastName.value.length ||
    !phone.value.length
  ) {
    alert("All fields are required!");
    return;
  }

  store.setCurrent({
    id: id.value,
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
  });

  store.saveContact();

  emit("close");
};
</script>

<template>
  <div
    class="fixed flex items-center justify-center inset-0 bg-white/20 backdrop-blur"
    @click.self="$emit('close')"
  >
    <div class="border border-zinc-600 p-4 bg-white">
      <label class="flex flex-col mb-2">
        <span>First name:</span>
        <input
          ref="firstNameElem"
          v-model="firstName"
          type="text"
          class="border border-zinc-600 px-2 py-1"
          autofocus
        />
      </label>

      <label class="flex flex-col mb-2">
        <span>Last name:</span>
        <input
          v-model="lastName"
          type="text"
          class="border border-zinc-600 px-2 py-1"
        />
      </label>

      <label class="flex flex-col mb-2">
        <span>Phone number:</span>
        <input
          v-model="phone"
          type="text"
          class="border border-zinc-600 px-2 py-1"
        />
      </label>

      <div class="flex w-full justify-between pt-2">
        <button
          v-if="id"
          @click="deleteContact"
          class="border border-red-800 bg-red-800 text-white px-2 py-1"
        >
          Delete!
        </button>
        <button
          @click="saveContact"
          class="border border-zinc-600 bg-sky-800 text-white px-2 py-1"
        >
          Save contact
        </button>
      </div>
    </div>
  </div>
</template>
