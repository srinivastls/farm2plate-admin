import api from "./api";

import { OrderStatus } from "@/types/order";

export async function getOrders() {

  const res = await api.get("/admin/orders");

  

  return res.data.data;

}

export async function getOrderById(id: string) {

  const res = await api.get(`/admin/orders/${id}`);

  return res.data;

}

export async function updateOrderStatus(

  id: string,

  status: OrderStatus,

) {

  return api.patch(

    `/admin/orders/${id}`,

    {
      status,
    },

  );

}

export async function deleteOrder(id: string) {

  return api.delete(`/admin/orders/${id}`);

}