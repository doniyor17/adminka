<script setup lang="ts">
import { watch, reactive } from 'vue'; 
import { IOrderItem } from '../models/index.ts';

import { NSpace, NInput, NColorPicker } from 'naive-ui';

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
    <div>Libos nomi</div>
    <n-space vertical class="mb-3">
      <n-input
        v-model:value="orderData.title"
        type="text"
        placeholder="Buyurtma: nima tikamiz?"
      />
    </n-space>
    <div class="flex items-center">
      <div>Mato turi</div>
      <n-space vertical class="mb-3">
        <n-input
          v-model:value="orderData.cloth"
          type="text"
          placeholder="Mato nomi"
        />
      </n-space>
    </div>
    <div class="flex items-center">
      <div class="w-[50%]">
        <div>Libos rangi</div>
        <n-space vertical class="mb-3">
          <n-input
            v-model:value="orderData.color"
            type="text"
            placeholder="Libos rangi"
          />
        </n-space>
      </div>
      <div class="w-[50%]">
        <div>Mato turi</div>
        <n-space vertical class="mb-3">
          <n-color-picker
            v-model:value="orderData.colorCode"
          />
        </n-space>
      </div>
    </div>
</template>