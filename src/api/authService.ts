import { API_AUTH } from "../config/api";

export async function login(email: string, password: string) {
  const res = await fetch(`${API_AUTH}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Error al conectar con AuthService");
  }

  const data = await res.json();

  return data;
}

export async function getUserProfile() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_AUTH}/me`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  return res.json();
}

export async function registerUser(payload: {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  rolId: number;
}) {
  const res = await fetch(`${API_AUTH}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Error al registrar usuario");

  return res.json();
}

