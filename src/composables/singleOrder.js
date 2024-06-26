import { ref, onMounted } from "vue";
import useDayjs from "../utils/dayjs.ts";
import { useRoute, useRouter } from "vue-router";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.ts";
import { amountFormat } from "../utils/numberFunctions/amountFormat.js";
import { phoneMask } from "../utils/mask.ts";
import { errorToast } from "../utils/toast.ts";

export function useSingleOrder() {
  const { toDDMMYYYYDot } = useDayjs();
  const route = useRoute();
  const router = useRouter();
  const status = ref("");
  const source = ref("");
  const clothTaken = ref("");
  const partialPrice = ref(null);
  const colorCode = ref("");

  const singleOrder = ref(null);
  const statusOptions = ref([
    {
      label: "Qabul qilindi",
      value: "accepted",
    },
    {
      label: "Tikilmoqda",
      value: "inProgress",
    },
    {
      label: "Tugatildi",
      value: "done",
    },
  ]);
  const sourceOptions = ref([
    {
      label: "Telegram",
      value: "telegram",
    },
    {
      label: "Instagram",
      value: "instagram",
    },
    {
      label: "Boshqa",
      value: "other",
    },
  ]);
  const clothOptions = ref([
    {
      label: "Mato olinmagan",
      value: "no-taken",
    },
    {
      label: "Mato olindi",
      value: "taken",
    },
  ]);

  async function fetchOrderByID(id) {
    const docSnap = await getDoc(doc(db, "orders", id));

    if (!docSnap.exists()) {
      errorToast("Bunday buyurtma topilmadi!");
    } else {
      singleOrder.value = { id: docSnap.id, ...docSnap.data() };
    }
  }

  async function onUpdateStatus(status) {
    const orderRef = doc(db, "orders", route.params.id);
    await updateDoc(orderRef, {
      status: status,
    });
  }
  async function onClothChange(cloth) {
    const orderRef = doc(db, "orders", route.params.id);
    await updateDoc(orderRef, {
      isClothtaken: cloth,
    });
  }
  async function onSourceChange(source) {
    const orderRef = doc(db, "orders", route.params.id);
    await updateDoc(orderRef, {
      source: source,
    });
  }
  async function onChangePrice() {
    const totalPrice =
      +singleOrder.value.partialPrice + (partialPrice.value - 0);

    if (isNaN(totalPrice) && !totalPrice) return;

    const orderRef = doc(db, "orders", route.params.id);
    if (totalPrice >= parseInt(singleOrder.value.price)) {
      await updateDoc(orderRef, {
        partialPrice: totalPrice,
        payment: "full",
      });
    } else {
      await updateDoc(orderRef, {
        partialPrice: totalPrice,
      });
    }
    await fetchOrderByID(route.params.id);
    partialPrice.value = null;
  }

  async function onDeleteOrder(id) {
    const permitDelete = confirm("Buyurtmani o'chirishni xohlaysizmi?");
    if (!permitDelete) return;
    await deleteDoc(doc(db, "orders", id));
    router.push("/");
  }

  onMounted(async () => {
    await fetchOrderByID(route.params.id);
    status.value = singleOrder.value.status;
    clothTaken.value = singleOrder.value.isClothtaken;
    source.value = singleOrder.value.source;
    colorCode.value = singleOrder.value.colorCode;
  });

  return {
    toDDMMYYYYDot,
    amountFormat,
    phoneMask,
    status,
    source,
    clothTaken,
    partialPrice,
    clothOptions,
    sourceOptions,
    statusOptions,
    singleOrder,
    colorCode,
    onUpdateStatus,
    onClothChange,
    onSourceChange,
    onDeleteOrder,
    onChangePrice,
  };
}
