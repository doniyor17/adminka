<template>
  <div>Bunday sahifa topilmadi</div>
  <button @click="router.go(-1)">Orqaga qaytish</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped></style>
