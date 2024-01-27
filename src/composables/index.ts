import { useRoute, useRouter } from "vue-router";

export function useOrder() {
    const router = useRouter()
    const route = useRoute()
    return {
        route,
        router
    }
};