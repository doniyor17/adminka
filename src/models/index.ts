type NumOrString = number | string;
type NumOrNull = null | number;

export interface IOrder {
  id?: NumOrString;
  status: string;
  acceptedAt: NumOrString;
  title: string;
  cloth: string;
  color: string;
  source: string;
  date: number | null | undefined;
  isClothtaken: string;
  price: NumOrNull;
  partialPrice?: NumOrNull;
  payment: string;
  name: string;
  address: string;
  phone: string;
  deliveryType: string;
  deliveryCost: NumOrNull;
  description?: string;
}
