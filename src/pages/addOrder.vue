<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import { IOrder } from '../models'

import { NSpace, NInput, NInputNumber, NDatePicker, NSelect } from 'naive-ui';

const newOrder = reactive(newOrderFn());
const source = ref('instagram');

const paymentOptions = ref([
    {
        label: "To'liq",
        value: 'full'
    },
    {
        label: "To'liq emas",
        value: 'partial'
    }
]);

const deliveryOptions = ref([
{
    label: "Yandex",
    value: 'yandex'
},
{
    label: "Pochta",
    value: 'post'
}
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

function newOrderFn(): IOrder {
    return {
        status: 'Qabul qilindi',
        acceptedAt: Date.now(),
        title: '',
        cloth: '',
        color: '',
        source: '',
        isClothtaken: 'no-taken',
        date: Date.now(),
        price: null,
        partialPrice: null,
        payment: 'full',
        name: '',
        address: '',
        phone: '',
        deliveryType: '',
        deliveryCost: null,
        description: ''
    }
}

function onSubmit() {    
    if (!newOrder.cloth && !newOrder.color && !newOrder.date && !newOrder.deliveryCost && !newOrder.deliveryType && !newOrder.name && !newOrder.payment && !newOrder.phone && !newOrder.price && !newOrder.title) {
        return;
    }
    
    axios.post('http://localhost:3001/orders', newOrder)
    .then((res) => {
        if (res.status === 201) {
            alert('Buyurtma qabul qilindi');
            newOrderFn();
        }
        
    })
    .catch(err => alert(`Xatolik yuz berdi: ${err?.message}`))
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div>Libos nomi</div>
        <n-space vertical class="mb-3">
            <n-input v-model:value="newOrder.title" type="text" placeholder="Buyurtma: nima tikamiz?" />
        </n-space>
        <div class="flex items-center">
            <div class="w-[50%]">
                <div>Buyurtma olindi</div>
                <n-space vertical class="mb-3">
                    <n-select
                        v-model:value="source"
                        class="border-primary rounded-lg"
                        :options="sourceOptions"
                    />
                </n-space>
            </div>
            <div class="w-[50%]">
                <div>Mato turi</div>
                <n-space vertical class="mb-3">
                    <n-input v-model:value="newOrder.cloth" type="text" placeholder="Mato nomi" />
                </n-space>
            </div>
        </div>
        <div class="flex items-center">
            <div class="w-[50%]">
                <div>Libos rangi</div>
                <n-space vertical class="mb-3">
                    <n-input v-model:value="newOrder.color" type="text" placeholder="Libos rangi" />
                </n-space>
            </div>
            <div class="w-[50%]">
                <div>Tugatish sanasi</div>
                <n-space vertical class="mb-3">
                    <n-date-picker v-model:value="newOrder.date" clearable type="date" />
                </n-space>
            </div>
        </div>
        <div class="flex items-center">
            <div class="w-[50%]">
                <div>Buyurtma narxi</div>
                <n-space vertical class="mb-3">
                    <n-input-number v-model:value="newOrder.price" type="text" placeholder="500 000" />
                </n-space>
            </div>
            <div class="w-[50%]">
                <div>To'lov</div>
                <n-space vertical class="mb-3">
                    <n-select
                        v-model:value="newOrder.payment"
                        filterable
                        clearable
                        placeholder="To'lov turini tanlang"
                        :options="paymentOptions"
                    />
                </n-space>
            </div>
        </div>
        <div v-if="newOrder.payment=== 'partial'">
            <div>O'tkazilgan summa</div>
            <n-space vertical class="mb-3">
                <n-input-number v-model:value="newOrder.partialPrice" type="text" placeholder="500 000" />
            </n-space>
        </div>
        <div class="text-center font-bold text-[18px]">Mijoz ma'lumotlari</div>
        <div class="flex items-center">
            <div class="w-[50%]">
                <div>Ismi</div>
                <n-space vertical class="mb-3">
                    <n-input v-model:value="newOrder.name" type="text" placeholder="Mubina" />
                </n-space>
            </div>
            <div class="w-[50%]">
                <div>Telefon</div>
                <n-space vertical class="mb-3">
                    <n-input v-model:value="newOrder.phone" type="text" placeholder="+99899-008-22-17" />
                </n-space>
            </div>
        </div>      
        <div>Manzil</div>
        <n-space vertical class="mb-3">
            <n-input v-model:value="newOrder.address" type="text" placeholder="Toshkent sh. Mizo G'olib ko'chasi 22A" />
        </n-space>
        <div class="text-center font-bold text-[18px]">Yetkazib berish</div>
        <div class="flex items-center">
            <div class="w-[50%]">
                <div>Narxi</div>
                <n-space vertical class="mb-3">
                    <n-input-number v-model:value="newOrder.deliveryCost" type="text" placeholder="20 000" />
                </n-space>
            </div>
            <div class="w-[50%]">
                <div>Yetkazib berish turi</div>
                <n-space vertical class="mb-3">
                    <n-select
                    v-model:value="newOrder.deliveryType"
                    filterable
                    clearable
                    placeholder="To'lov turini tanlang"
                    :options="deliveryOptions"
                    />
                </n-space>
            </div>
        </div>
        <div class="text-center font-bold text-[18px]">Alohida qayd</div>
        <n-space vertical class="mb-3">
            <n-input v-model:value="newOrder.description" type="textarea" placeholder="Yubka sal uzunroq bo'lsin" />
        </n-space>
        <div>
            <button class="btn-primary shadow-lg" type="submit">Buyurtmani qo'shish</button>
        </div>
    </form>
</template>
