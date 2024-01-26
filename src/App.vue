<script setup lang="ts">
import { ref } from "vue";
const isToggled = ref(false);
const w = ref(300);

function onToggle() {
  isToggled.value = !isToggled.value;
  if (!isToggled.value) w.value = 300;
  else w.value = 0;
}
</script>

<template>
  <div
    class="h-16 bg-navBg shadow-md p-4 fixed top-0 right-0 transition-all duration-500 flex items-center"
    :style="`width: calc(100% - ${w}px)`"
  >
    <button class="me-auto" @click="onToggle">
      <span class="fa-solid fa-bars text-xl" />
    </button>
    <!-- <router-link :to="{ name: AdminRoutes.LOGIN }" class="text-[18px] rounded-md mb-3 p-2]">
      <i class="fa-solid fa-right-from-bracket pl-8"></i>
      Logout
    </router-link> -->
  </div>
  <div
    class="bg-gray-200 fixed top-0 w-[300px] left-0 h-screen transition-all duration-500 text-center px-5"
    :class="{ '-translate-x-[300px]': isToggled }"
  >
    <div class="flex justify-center mt-5 mb-[200px]">
      <span class="me-2 w-[6px] bg-[#0d6efd]" />
      <h2 class="uppercase text-[32px] font-[700]">Admin</h2>
    </div>
    <div class="text-left">
      <!-- <router-link
        :to="{ name: AdminRoutes.HOME }"
        class="block w-5/6 transition-all text-left text-[18px] rounded-md mx-auto mb-3 p-2"
      >
        <span class="fa-solid fa-file-contract pl-8" />
        Current exam
      </router-link> -->
      <!-- <router-link
        :to="{ name: AdminRoutes.LISTENING }"
        class="block w-5/6 transition-all text-left text-[18px] rounded-md mx-auto mb-3 p-2"
      >
        <span class="fa-solid fa-volume-up pl-8" />
        Listening
      </router-link>
      <router-link
        :to="{ name: AdminRoutes.READING }"
        class="block w-5/6 transition-all text-left text-[18px] rounded-md mx-auto mb-3 p-2"
      >
        <span class="fa-solid fa-book-open pl-8" />
        Reading
      </router-link>
      <router-link
        :to="{ name: AdminRoutes.WRITING }"
        class="block w-5/6 transition-all text-left text-[18px] rounded-md mx-auto mb-3 p-2"
      >
        <i class="fa-solid fa-pen pl-8" />
        Writing
      </router-link>
      <router-link
        :to="{ name: AdminRoutes.EXAM_RESULTS }"
        class="block w-5/6 transition-all text-left text-[18px] rounded-md mx-auto mb-3 p-2"
      >
        <i class="fa-solid fa-pen pl-8" />
        Results
      </router-link> -->
      <router-link>Nima</router-link>
    </div>
  </div>
  <div
    class="mt-20 ms-auto px-4 transition-all duration-500"
    :style="`width: calc(100% - ${w}px)`"
  >
    <router-view />
  </div>
</template>

<style scoped>
.full {
  width: 100%;
}
.toggled {
  width: calc(100% - var());
}
.router-link-exact-active {
  background-color: #0d6efd;
  color: white;
}
</style>
