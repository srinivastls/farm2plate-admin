import api from "./api";

export async function getCustomers() {

  const res = await api.get("/admin/customers");

  return res.data.data;

}

export async function getCustomer(id: string) {

  const res = await api.get(`/admin/customers/${id}`);

  return res.data;

}