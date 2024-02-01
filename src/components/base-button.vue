<template>
  <div>
    <button
      class="cursor-pointer px-2 py-1 pb-2 rounded-md border-solid w-full shadow-md"
      :class="classProp"
      :disabled="disabled || pending || false"
      data-test="login-btn"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  pending: {
    type: Boolean,
    required: false,
    default: false,
  },
  classProp: {
    type: String,
    default: "",
  },
});
</script>

<style>
.loader {
  width: 10px;
  height: 10px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
