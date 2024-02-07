<script setup lang="ts">
import { watch, reactive } from 'vue'; 
import { IOrderItem } from '../models/index.ts';

const props = defineProps<{
  modelValue: IOrderItem
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', data: IOrderItem): void
  (e: 'onAdd', id: number): void
  (e: 'onRemove', id: number): void
}>()

const orderData = reactive<IOrderItem>({
  id: 0,
  cloth: '',
  title: '',
  color: '',
  colorCode: '',
  price: null
})

function handleEmit(e: IOrderItem) {
  const data = { id: props.modelValue.id, ...e };
  emit('update:modelValue', data);
}

watch( orderData, handleEmit, {deep: true})
</script>

<template>

</template>