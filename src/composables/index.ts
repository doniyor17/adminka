import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { IOrder } from '../models'
import axios from "axios";

export function useOrder() {
    const router = useRouter()
    const route = useRoute()
    const orders = ref<IOrder[]>([]);
    const singleOrder = ref<IOrder | null>(null);

    async function fetchOrders() {
        const { data } = await axios.get('http://localhost:3000/orders')
        
        if (!data?.length) {
            alert("Ro'yxatni yuklashda xatolik")
            return;
        };

        orders.value = data;
    };

    async function fetchOrderByID(id: any) {
        const { data } = await axios.get(`http://localhost:3000/orders/${id}`)

        if (!data) {
            alert("Ro'yxatni yuklashda xatolik")
            return;
        };

        singleOrder.value = data;
    };

    return {
        route,
        router,
        orders,
        singleOrder,
        fetchOrders,
        fetchOrderByID
    }
};