import api from "./api";

export async function getFarms() {

  const res = await api.get("/admin/farms");

  return res.data.data;

}

export async function getFarm(id: string) {

  const res = await api.get(`/admin/farms/${id}`);

  return res.data.data;

}

export async function deleteFarm(id: string) {

  return api.delete(`/admin/farms/${id}`);

}