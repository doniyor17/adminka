type NumOrNull = null | number;

export interface IOrder {
  id?: string | number;
  status: string;
  acceptedAt: number | string | null;
  title: string;
  cloth: string;
  color: string;
  colorCode: string;
  source: string;
  date: number | string | null;
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

export interface INewOrder {
  status: string;
  acceptedAt: number | string | null;
  title: string;
  cloth: string;
  color: string;
  colorCode: string;
  source: string;
  date: number | string | null;
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
export interface formOrder {
  id?: string | number;
  title: string;
  date: number | string | null;
  cloth: string;
  status: string;
}
