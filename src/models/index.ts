type NumOrString = number | string;
type NumOrNull = null | number;

export interface IOrder {
  id?: string | number;
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
};

export interface INewOrder {
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
};
export interface formOrder {
  id?: string | number
  title: string,
  date: string | number
  cloth: string
  status: string
}
