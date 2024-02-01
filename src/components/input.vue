<template>
  <div
    :class="inline && label ? ['flex', 'items-center', 'justify-between'] : ''"
  >
    <div v-if="label" class="mb-2">
      <label :for="id">{{ label }}</label>
    </div>
    <div>
      <input
        :id="id"
        class="border px-2 py-0.5 rounded-md w-full"
        :class="classProp"
        :type="type || 'text'"
        :placeholder="placeholder"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["update:modelValue"]);

type InputType = "email" | "password" | "number";

defineProps<{
  id?: string;
  label?: string;
  inline?: boolean;
  type: InputType;
  placeholder?: string;
  modelValue: string;
  classProp: string;
}>();
</script>
