"use client";

import { useState } from "react";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: React.FormEvent,
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await login(
        email,
        password,
      );

      localStorage.setItem(
        "token",
        res.accessToken,
      );

      router.push("/dashboard");
    } catch {
      alert("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

      <h1 className="text-3xl font-bold text-center text-green-700">
        🌱 FarmPlate
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Admin Portal
      </p>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          disabled={loading}
          className="w-full bg-green-700 hover:bg-green-800 text-white p-3 rounded-lg"
        >
          {loading
              ? "Signing In..."
              : "Login"}
        </button>
      </form>
    </div>
  );
}