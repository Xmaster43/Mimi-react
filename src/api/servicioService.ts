import { API_SERVICES } from "../config/api";
import type { Service } from "../interfaces/Service";

// Obtener todos
export async function getServicios(): Promise<Service[]> {
  const res = await fetch(`${API_SERVICES}`);
  if (!res.ok) throw new Error("Error al obtener servicios");
  return res.json();
}

// Obtener por ID
export async function getServicioById(id: number): Promise<Service> {
  const res = await fetch(`${API_SERVICES}/${id}`);
  if (!res.ok) throw new Error("Servicio no encontrado");
  return res.json();
}

// Crear
export async function createServicio(data: Omit<Service, "idServicio">): Promise<Service> {
  const res = await fetch(`${API_SERVICES}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error al crear servicio");
  return res.json();
}

// Actualizar
export async function updateServicio(id: number, data: Partial<Service>): Promise<Service> {
  const res = await fetch(`${API_SERVICES}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error al actualizar servicio");
  return res.json();
}

// Eliminar
export async function deleteServicio(id: number): Promise<void> {
  const res = await fetch(`${API_SERVICES}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al eliminar servicio");
}


