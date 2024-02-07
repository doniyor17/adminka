<script setup lang="ts">
import { ref } from "vue";
const isToggled = ref(false);
const w = ref(0);

function onToggle() {
  isToggled.value = !isToggled.value;
  if (!isToggled.value) w.value = 0;
  else w.value = 300;
}
</script>

<template>
  <div
    class="h-16 bg-primary shadow-md p-4 fixed top-0 right-0 transition-all duration-500 flex items-center z-50"
    :style="`width: calc(100% - ${w}px)`"
  >
    <button class="me-auto" @click="onToggle">
      <span class="fa-solid fa-bars text-xl" />
    </button>
  </div>
  <div
    class="bg-white fixed top-0 w-[300px] left-0 h-screen transition-all duration-500 text-center px-5"
    :class="{ '-translate-x-[300px]': !isToggled }"
  >
    <div class="flex justify-center mt-5 mb-[200px]">
      <span class="me-2 w-[6px] bg-primary" />
      <h2 class="title text-[34px] font-[600]">نور عيني</h2>
    </div>
    <div class="text-left" @click="onToggle">
      <router-link
        to="/"
        class="block w-5/6 transition-all text-left text-[18px] rounded-md mx-auto mb-3 p-2 link-router"
      >
        <span class="fa-solid fa-file-contract pl-8" />
        Buyurtmalarim
      </router-link>
      <router-link
        to="/order/add"
        class="block w-5/6 transition-all text-left text-[18px] rounded-md mx-auto mb-3 p-2 link-router"
      >
        <span class="fa-solid fa-plus pl-8" />
        Yangi buyurtma
      </router-link>
    </div>
  </div>
  <div
    class="mt-20 ms-auto px-4 transition-all duration-500"
    :style="`width: calc(100% - ${w}px)`"
  >
    <router-view />
  </div>
</template>

<style>
body {
  font-family: "Josefin Sans", sans-serif;
}
.title {
  font-family: "Noto Kufi Arabic", sans-serif;
}
.full {
  width: 100%;
}
.toggled {
  width: calc(100% - var());
}
.router-link-exact-active {
  background-color: #fff !important;
  color: #222 !important;
  border: 2px solid #d39353;
}
.link-router {
  background-color: #d39353;
  color: white;
}
</style>