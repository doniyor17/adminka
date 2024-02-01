<script setup lang="ts">
import { useOrder } from "../composables";
import { IOrder } from "../models";
import useDayjs from "../utils/dayjs";
import Loading from "../components/loading.vue";

const { router, orders, loading } = useOrder();
const { toDDMMYYYYDot } = useDayjs();

function onSelectOrder(order: IOrder) {
  router.push({ name: "single-order", params: { id: order.id } });
}
</script>

<template>
  <div v-if="!loading">
    <Loading />
  </div>
  <div v-else>
    <div v-if="!orders.length" class="text-center pt-10 text-2xl font-semibold">
      Ma'lumotlar topilmadi
    </div>
    <div v-else>
      <table class="w-full">
        <thead>
          <tr class="text-center border-b-[2px]">
            <th class="w-[30%]">Nomi</th>
            <th class="w-[30%]">Sanasi</th>
            <th class="w-[20%]">Matosi</th>
            <th class="w-[20%]">Holati</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order of orders"
            :key="order?.name"
            class="text-center border-b-[1px] cursor-pointer"
            @click="onSelectOrder(order)"
          >
            <td class="py-2 truncate">{{ order.title }}</td>
            <td class="py-2 truncate">
              {{ toDDMMYYYYDot(order.date ? order.date : 0) }}
            </td>
            <td class="py-2 truncate">{{ order.cloth }}</td>
            <td v-if="order.status == 'accepted'" class="py-2 truncate">
              Qabul qilindi
            </td>
            <td v-if="order.status == 'done'" class="py-2 truncate">Tugadi</td>
            <td v-if="order.status == 'inProgress'" class="py-2 truncate">
              Tikilyapti
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
