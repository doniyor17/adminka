<script setup lang="ts">
// import { ref } from "vue";

</script>

<template>
  <div
    class="mt-20 ms-auto px-4 transition-all duration-500 w-screen pb-3"
  >
    <router-view />
  </div>
</template>

<style>
body {
  font-family: "Josefin Sans", sans-serif;
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
