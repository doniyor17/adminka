<script setup lang="ts">
import { onMounted } from 'vue';
// import { useOrder } from '../composables';

// const { route } = useOrder()

onMounted(() => {
    // console.log(route.params.id);
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
        <div class="w-[65%]">Jilbaab</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Sanasi</div>
        <div class="w-[65%]">10.01.2024</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Rangi</div>
        <div class="w-[65%]">Qora-jigar rang</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Narxi</div>
        <div class="w-[65%]">500 000</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">To'lov turi</div>
        <div class="w-[65%]">To'liq</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Matosi</div>
        <div class="w-[65%]">Bayan</div>
    </div>
    <div class="text-center font-bold text-[18px]">Mijoz ma'lumotlari</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Ismi</div>
        <div class="w-[65%]">Maryam</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Telefon</div>
        <div class="w-[65%]">+99899-008-22-17</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Manzil</div>
        <div class="w-[65%]">Andijon</div>
    </div>
    <div class="text-center font-bold text-[18px]">Yetkazib berish</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Turi</div>
        <div class="w-[65%]">Yandex</div>
    </div>
    <div class="flex items-center mb-3 border-b-[2px] border-gray-700 pb-2">
        <div class="w-[35%] font-semibold">Narxi</div>
        <div class="w-[65%]">20 000 so'm</div>
    </div>
    <div class="text-center font-bold text-[18px]">Boshqa ma'lumotlari</div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Holati</div>
        <div class="w-[65%]">Tikuvda</div>
    </div>
    <div class="flex items-center mb-3">
        <div class="w-[35%] font-semibold">Alohida qayd</div>
        <div class="w-[65%]">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
    </div>
</template>
