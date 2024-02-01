<template>
  <div
    class="w-screen h-screen bg-gradient-to-tr from-secondary to-info flex items-center justify-center relative"
  >
    <div class="card w-screen bg-white rounded-lg p-5">
      <div class="flex justify-center mb-[43px]">
        <span class="w-[6px] bg-primary" />
        <h2 class="uppercase text-[32px] font-[700] ms-3">نور عيني</h2>
      </div>
      <div class="text-center mb-[50px]">
        <h3 class="text-[28px] font-[600] uppercase">Sign in</h3>
        <p class="text-[14px]">Enter your credentials to enter as Admin</p>
      </div>
      <div>
        <v-input
          id="email"
          v-model="login"
          type="text"
          label="Username"
          placeholder="Username kiriting"
          class-prop="mb-5 py-3"
        />
        <v-input
          id="password"
          v-model="password"
          type="password"
          label="Parol"
          placeholder="Parolni kiriting"
          min-length="8"
          class-prop="py-3"
        />
      </div>
      <v-button
        class-prop="uppercase w-100 my-[30px] bg-primary hover:bg-secondary text-white"
        @click="onSubmit"
      >
        Kirish
      </v-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { errorToast } from "../utils/toast";
import VButton from "../components/base-button.vue";
import VInput from "../components/input.vue";

const router = useRouter();
const login = ref("");
const password = ref("");

function onSubmit() {
  if (!login.value.length || !password.value.length) {
    errorToast("Credentials are empty!");
  } else if (login.value !== "admin nuruayniy" && password.value !== "12345") {
    errorToast("Invalid credentials!");
  } else {
    sessionStorage.setItem("loggedIn", true);
    router.push({ name: "home" });
  }
}
</script>
