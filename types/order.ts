export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "PACKED"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export type PaymentStatus =
  | "PENDING"
  | "PAID"
  | "FAILED"
  | "REFUNDED";

export interface OrderItem {

  id: string;

  quantity: number;

  price: number;

  product: {

    id: string;

    name: string;

    image?: string;

    unit: string;

  };

}

export interface Order {

  id: string;

  total: number;

  status: OrderStatus;

  paymentStatus: PaymentStatus;

  createdAt: string;

  user: {

    id: string;

    name: string;

    email: string;

  };

  items: OrderItem[];

}