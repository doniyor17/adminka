<script setup lang="ts">
// import { ref } from 'vue';
import { useOrder } from "../composables/index.ts";
import { IOrder } from "../models/index.ts";
import useDayjs from "../utils/dayjs.ts";
// import Loader from "../components/loading.vue";

const { router, orders } = useOrder();
const { toDDMMYYYYDot } = useDayjs();

// Touch event variables
// const startX = ref(0);
// const startY = ref(0);
// const swipingId = ref(null);

function onSelectOrder(order: IOrder) {
  router.push({ name: "single-order", params: { id: order.id } });
}

function onChangeRouter(){
  router.push({name: 'add-order'});
}
// // Touch event methods
// function onTouchStart(id: any){
//   startX.value = 0;
//   startY.value = 0;
//   swipingId.value = id;
// }
// function onTouchMove(id: any){
//   console.log(id);
// }
// function onTouchEnd(id: any){
//   console.log(id);
// }
</script>

<template>
    <template
      v-if="!orders.length"
    >
      <div
        class="text-center pt-10 text-2xl font-semibold"
      >
        <div>
          Buyurtmalar yo'q hozircha
        </div>
        <button class="bg-primary text-white px-3 py-2 rounded-md shadow-md" @click="onChangeRouter">
          Yangi qo'shish
        </button>
      </div>

    </template>
    <template v-else>
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
              ref="orderItem"
              class="text-center border-b-[1px] cursor-pointer"
              @click="onSelectOrder(order)"
            >
            <!-- @touchstart="onTouchStart(order.id)"
            @touchmove="onTouchMove(order.id)"
            @touchend="onTouchEnd(order.id)" -->
            <td class="py-2 truncated">
              {{ order.title }}
            </td>
            <td class="py-2 truncate overflow-hidden">
              {{ toDDMMYYYYDot(order.date ? order.date : 0) }}
            </td>
            <td class="py-2 truncate overflow-hidden">{{ order.cloth }}</td>
            <td
            	v-if="order.status == 'accepted'"
            	class="py-2 truncated"
            >
              Qabul qilindi
            </td>
            <td
            	v-if="order.status == 'done'"
            	class="py-2 truncated"
            >Tugadi</td>
            <td
            	v-if="order.status == 'inProgress'"
            	class="py-2 truncated"
            >
              Tikilyapti
            </td>
          </tr>
        </tbody>
      </table>
    </template>
</template>

<style scoped>
/* .swipe-delete {
  transform: translateX(-100%);
} */
.truncated {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
