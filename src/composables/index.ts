import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IOrder } from "../models";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { errorToast } from "../utils/toast";

export function useOrder() {
  const router = useRouter();
  const route = useRoute();
  const orders = ref<IOrder[]>([]);
  const loading = ref<boolean>(false);

  function fetchOrders() {
    try {
      loading.value = true;
      let items: any = [];
      onSnapshot(collection(db, "orders"), (orderSnapshot) => {
        orderSnapshot.forEach((order) => {
          items.push({
            id: order.id,
            ...order.data(),
          });
        });
        orders.value = items;
      });
    } catch (err) {
      errorToast("Xatolik yuz berdi!");
    } finally {
      loading.value = false;
    }
  }

  async function addOrder(order: IOrder) {
    try {
      await addDoc(collection(db, "orders"), order);
    } catch (err) {
      errorToast("Xatolik! Buyurtmani qaytadan qo'shing");
    }
  }

  onMounted(() => {
    fetchOrders();
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
