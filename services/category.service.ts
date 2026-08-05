import api from "./api";

export async function getCategories() {

  const res = await api.get("/admin/categories");

  return res.data.data;

}

export async function createCategory(data: any) {

  return api.post("/admin/categories", data);

}

export async function updateCategory(
  id: string,
  data: any,
) {

  return api.patch(
    `/admin/categories/${id}`,
    data,
  );

}

export async function deleteCategory(
  id: string,
) {

  return api.delete(
    `/admin/categories/${id}`,
  );

}