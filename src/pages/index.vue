<script setup lang="ts">
import { onMounted } from 'vue';
import { useOrder } from '../composables';
import { IOrder } from '../models';

const { router, orders, fetchOrders } = useOrder();
function onSelectOrder(order: IOrder) {
    router.push({name: 'single-order', params: {id: order.id}})
}

onMounted(async () => {
    await fetchOrders()
})
</script>

<template>
    <div v-if="!orders.length">Ma'lumotlar topiplmadi</div>
    <table else class="w-full">
        <thead>
            <tr class="text-center border-b-[2px]">
                <th class="w-[30%]" >Nomi</th>
                <th class="w-[30%]" >Sanasi</th>
                <th class="w-[20%]" >Matosi</th>
                <th class="w-[20%]" >Holati</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order of orders" :key="order?.name" class="text-center border-b-[1px] cursor-pointer" @click="onSelectOrder(order)">
                <td class="py-2 truncate">{{ order.title }}</td>
                <td class="py-2 truncate">{{ order.date }}</td>
                <td class="py-2 truncate">{{ order.cloth }}</td>
                <td class="py-2 truncate">{{ order.status }}</td>
            </tr>
        </tbody>
    </table>
</template>

