<script setup lang="ts">
import { onMounted } from 'vue';
import { useOrder } from '../composables';

const { route, fetchOrderByID, singleOrder } = useOrder()

onMounted(async() => {
    await fetchOrderByID(route.params.id)
})
</script>

<template>
    <div class="flex items-center mb-3">
        <div class="me-3 font-semibold">Manbaa</div>
        <div class="">
            <span class="fa-brands fa-telegram text-2xl text-primary"/>
            <span class="fa-brands fa-instagram text-2xl text-primary"/>
        </div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Nomi</div>
        <div class="w-[65%]">{{ singleOrder?.title }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Sanasi</div>
        <div class="w-[65%]">{{ singleOrder?.date }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Rangi</div>
        <div class="w-[65%]">{{ singleOrder?.color }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Narxi</div>
        <div class="w-[65%]">{{ singleOrder?.price }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">To'lov turi</div>
        <div class="w-[65%]">{{ singleOrder?.payment }}</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Matosi</div>
        <div class="w-[65%]">{{ singleOrder?.cloth }}</div>
    </div>
    <div class="text-center font-bold text-[18px]">Mijoz ma'lumotlari</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Ismi</div>
        <div class="w-[65%]">{{ singleOrder?.name }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Telefon</div>
        <div class="w-[65%]">{{ singleOrder?.phone }}</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Manzil</div>
        <div class="w-[65%]">{{ singleOrder?.address }}</div>
    </div>
    <div class="text-center font-bold text-[18px]">Yetkazib berish</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Turi</div>
        <div class="w-[65%]">{{ singleOrder?.deliveryType }}</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Narxi</div>
        <div class="w-[65%]">{{ singleOrder?.deliveryCost }} so'm</div>
    </div>
    <div class="text-center font-bold text-[18px]">Boshqa ma'lumotlari</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Holati</div>
        <div class="w-[65%]">{{ singleOrder?.status }}</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Alohida qayd</div>
        <div class="w-[65%]">{{ singleOrder?.description }}</div>
    </div>
</template>
