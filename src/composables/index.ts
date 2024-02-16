import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IOrder, formOrder } from "../models/index.js";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase.js";
import useDayjs from "../utils/dayjs.ts";
import { errorToast } from "../utils/toast.js";

export function useOrder() {
  const router = useRouter();
  const route = useRoute();
  const orders = ref<formOrder[]>([]);
  const loading = ref<boolean>(false);
  const { toDDMMYYYYDot } = useDayjs();

  function fetchOrders() {
    try {
      loading.value = true;
      let items: any = [];
      const queryReq = query(
        collection(db, "orders"),
        orderBy("acceptedAt", "desc"),
      );
      onSnapshot(queryReq, (orderSnapshot) => {
        orderSnapshot.forEach((order) => {
          items.push({
            id: order.id,
            ...order.data(),
          });
        });
        loading.value = false;
        orders.value = formatOrders(items);
      });
    } catch (err) {
      errorToast("Xatolik yuz berdi!");
    } finally {
      loading.value = false;
    }
  }

  function formatOrders(orders: IOrder[]): formOrder[] {
    return orders.map((order) => {
      return {
        id: order.id,
        title: order.title.slice(0, 15) + "...",
        date: toDDMMYYYYDot(order.acceptedAt),
        cloth: order.cloth.slice(0, 15) + "...",
        status: order.status,
      };
    });
  }

  async function addOrder(order: IOrder) {
    try {
      await addDoc(collection(db, "orders"), order);
    } catch (err) {
      errorToast("Xatolik! Buyurtmani qaytadan qo'shing");
    }
  }

  onMounted(async () => {
    await fetchOrders();
  });

  return {
    route,
    router,
    loading,
    orders,
    fetchOrders,
    addOrder,
  };
}
