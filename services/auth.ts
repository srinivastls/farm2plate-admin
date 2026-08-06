import api from "@/lib/axios";

export async function login(
  email: string,
  password: string,
) {
  const res = await api.post("/auth/login", {
    email,
    password,
  });

  return res.data;
}

export function logout() {
  localStorage.clear();
}