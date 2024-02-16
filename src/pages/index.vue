<script setup lang="ts">
// import { ref } from 'vue';
import { useOrder } from "../composables/index.ts";
import { formOrder } from "../models/index.ts";
// import Loader from "../components/loading.vue";

const { router, orders } = useOrder();

// Touch event variables
// const startX = ref(0);
// const startY = ref(0);
// const swipingId = ref(null);

function onSelectOrder(order: formOrder) {
  router.push({ name: "single-order", params: { id: order.id } });
}

function onChangeRouter() {
  router.push({ name: "add-order" });
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
  <template v-if="!orders.length">
    <div class="text-center pt-10 text-2xl font-semibold">
      <div>Buyurtmalar yo'q hozircha</div>
      <button
        class="bg-primary text-white px-3 py-2 rounded-md shadow-md"
        @click="onChangeRouter"
      >
        Yangi qo'shish
      </button>
    </div>
  </template>
  <template v-else>
    <table class="w-full">
      <thead>
        <tr class="border-b-[2px]">
          <th class="">#</th>
          <th class="">Nomi</th>
          <th class="">Sanasi</th>
          <th class="">Matosi</th>
          <th class="">Holati</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(order, index) of orders"
          :key="order?.id"
          ref="orderItem"
          class="text-center border-b-[1px] cursor-pointer"
          @click="onSelectOrder(order)"
        >
          <!-- @touchstart="onTouchStart(order.id)"
            @touchmove="onTouchMove(order.id)"
            @touchend="onTouchEnd(order.id)" -->
          <td class="py-2 pe-2">
            {{ index + 1 }}
          </td>
          <td class="py-2 pe-2 !text-left capitalize">
            {{ order.title }}
          </td>
          <td class="py-2 pe-2 capitalize">
            {{ order.date }}
          </td>
          <td class="py-2 text-left capitalize">
            {{ order.cloth }}
          </td>
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
  </template>
</template>

<style scoped>
/* .swipe-delete {
  transform: translateX(-100%);
} */
tr:nth-child(even) {
  padding: 0 5px;
  background-color: #d6eeee;
}
</style>
