import api from "./api";

export const getProducts = async () => {
  const res = await api.get("/admin/products");

  return res.data.data;
};

export const deleteProduct = async (
  id: string,
) => {
  return api.delete(`/admin/products/${id}`);
};