<script setup lang="ts">
import { useOrder } from '../composables';

const { router } = useOrder();
function onSelectOrder(id: number | string) {
    router.push({name: 'single-order', params: {id}})
}
</script>

<template>
    <table class="w-full">
        <thead>
            <tr class="text-center border-b-[2px]">
                <th class="w-[30%]" >Nomi</th>
                <th class="w-[30%]" >Sanasi</th>
                <th class="w-[20%]" >Matosi</th>
                <th class="w-[20%]" >Holati</th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-center border-b-[1px] cursor-pointer" @click="onSelectOrder('sss')">
                <td class="py-2 truncate">Jilbaab</td>
                <td class="py-2 truncate">10.01.2024</td>
                <td class="py-2 truncate">Bayan</td>
                <td class="py-2 truncate">Tikuvda</td>
            </tr>
        </tbody>
    </table>
</template>

