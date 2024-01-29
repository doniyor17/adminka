<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useOrder } from '../composables';
import useDayjs from '../utils/dayjs';
import amountFormat from '../utils/numberFunctions/amountFormat.js';
import { phoneMask } from '../utils/mask';
import { NSpace, NSelect, NInputNumber } from 'naive-ui';
import axios from 'axios';

const { route, fetchOrderByID, singleOrder } = useOrder();
const { toDDMMYYYYDot } = useDayjs();
const status = ref('');
const source = ref('');
const clothTaken = ref('');
const partialPrice = ref<number | null>(null);
const statusOptions = ref([
    {
        label: "Qabul qilindi",
        value: 'accepted'
    },
    {
        label: "Tikilmoqda",
        value: 'inProgress'
    },
    {
        label: "Tugatildi",
        value: 'done'
    },
]);
const sourceOptions = ref([
    {
        label: "Telegram",
        value: 'telegram'
    },
    {
        label: "Instagram",
        value: 'instagram'
    },
    {
        label: "Boshqa",
        value: 'other'
    }
]);
const clothOptions = ref([
    {
        label: "Mato olinmagan",
        value: 'no-taken'
    },
    {
        label: "Mato olindi",
        value: 'taken'
    }
]);

function onStatusChange(status: string) {
    axios.patch(`http://localhost:3000/orders/${route.params.id}`, {
        ...singleOrder.value,
        status
    }).then(({data}) => {
        singleOrder.value = data
    })
}

function onSourceChange(source: string) {    
    axios.patch(`http://localhost:3000/orders/${route.params.id}`, {
        ...singleOrder.value,
        source
    }).then(({data}) => {
        singleOrder.value = data
    })
}

function onClothChange(cloth: string) {    
    axios.patch(`http://localhost:3000/orders/${route.params.id}`, {
        ...singleOrder.value,
        isClothtaken: cloth
    }).then(({data}) => {
        singleOrder.value = data
    })
}

function onChangePrice() {
    if (!partialPrice.value) return;

    let partialTotal: number = 0;
    if (singleOrder.value?.partialPrice) {    
        partialTotal = (partialPrice.value - 0) + (singleOrder.value?.partialPrice - 0)
    }
    
    axios.patch(`http://localhost:3000/orders/${route.params.id}`, {
        ...singleOrder.value,
        partialPrice: partialTotal
    }).then(({data}) => {
        singleOrder.value = data
        partialPrice.value = null
    })
}

onMounted(async() => {
    await fetchOrderByID(route.params.id);
    status.value = singleOrder.value?.status || '';
    source.value = singleOrder.value?.source || 'instagram';
    clothTaken.value = singleOrder.value?.isClothtaken || 'no-taken';
})
</script>

<template>
    <div class="flex items-center justify-between mb-3">
        <div>
            <n-space vertical>
                <n-select
                    v-model:value="status"
                    size="small"
                    class="border-primary rounded-lg"
                    :options="statusOptions"
                    @update:value="onStatusChange"
                />
            </n-space>
        </div>
        <div>
            <n-space vertical>
                <n-select
                    v-model:value="clothTaken"
                    size="small"
                    class="border-primary rounded-lg"
                    :options="clothOptions"
                    @update:value="onClothChange"
                />
            </n-space>
        </div>
        <div>
            <n-space vertical>
                <n-select
                    v-model:value="source"
                    size="small"
                    class="border-primary rounded-lg"
                    :options="sourceOptions"
                    @update:value="onSourceChange"
                />
            </n-space>
        </div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Qabul qilingan</div>
        <div class="w-[65%]">{{ toDDMMYYYYDot(singleOrder?.acceptedAt || '') }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Nomi</div>
        <div class="w-[65%]">{{ singleOrder?.title }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Rangi</div>
        <div class="w-[65%]">{{ singleOrder?.color }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Narxi</div>
        <div class="flex items-center w-[65%]">
            <div class="me-3">{{ amountFormat(singleOrder?.price) }}</div>
        </div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">To'lov turi</div>
        <div v-if="singleOrder?.payment === 'full'" class="w-[65%]">To'liq</div>
        <div v-else class="w-[65%] flex items-center">
            <div class="me-3">To'liq emas</div>
        </div>
    </div>
    <div v-if="singleOrder?.payment !== 'full'" class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">To'langan summa</div>
        <div class="flex items-center w-[65%]">
            <div class="me-1">{{ amountFormat(singleOrder?.partialPrice) }}</div>
            <input v-model="partialPrice" class="border-[2px] border-primary outline-none w-[50%] me-2 px-1 rounded-md" type="text" />
            <button class="text-center w-[10%] bg-primary rounded-md shadow-md" @click="onChangePrice">
                <span class="fa-solid fa-check"/>
            </button>
        </div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Matosi</div>
        <div class="w-[65%]">{{ singleOrder?.cloth }}</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-">
        <div class="w-[35%] font-semibold">Tugatish sanasi</div>
        <div class="w-[65%]">{{ toDDMMYYYYDot(singleOrder?.date || '') }}</div>
    </div>
    <div class="text-center font-bold text-[18px]">Mijoz ma'lumotlari</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Ismi</div>
        <div class="w-[65%]">{{ singleOrder?.name }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Telefon</div>
        <div class="w-[65%]">{{ phoneMask(singleOrder?.phone || '') }}</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Manzil</div>
        <div class="w-[65%]">{{ singleOrder?.address }}</div>
    </div>
    <div class="text-center font-bold text-[18px]">Yetkazib berish</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Turi</div>
        <div v-if="singleOrder?.deliveryType === 'yandex'" class="w-[65%]">Yandex</div>
        <div v-else class="w-[65%]">Pochta</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Narxi</div>
        <div class="w-[65%]">{{ amountFormat(singleOrder?.deliveryCost) }}</div>
    </div>
    <div class="text-center font-bold text-[18px]">Boshqa ma'lumotlari</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Alohida qayd</div>
        <div class="w-[65%]">{{ singleOrder?.description }}</div>
    </div>
</template>
