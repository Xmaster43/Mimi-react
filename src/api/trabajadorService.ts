import { API_WORKERS } from "../config/api";

export async function getTrabajadores() {
  const res = await fetch(`${API_WORKERS}`);

  if (!res.ok) {
    throw new Error("Error al obtener trabajadores");
  }

  return res.json();
}
