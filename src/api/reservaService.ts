import { API_RESERVATIONS } from "../config/api";
import type { ReservaResponse } from "../interfaces/ReservaResponse";

export interface CrearReservaPayload {
  idUsuario: number;
  idServicio: number;
  idTrabajador: number;
  fecha: string;
  hora: string;
}

export async function crearReserva(payload: CrearReservaPayload): Promise<ReservaResponse> {
  const res = await fetch(`${API_RESERVATIONS}/crear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Error al crear la reserva");
  }

  return res.json();
}


export async function getReservasByUsuario(idUsuario: number) {
  const res = await fetch(`${API_RESERVATIONS}/usuario/detalle/${idUsuario}`);

  if (!res.ok) {
    throw new Error("Error al cargar reservas del usuario");
  }

  return res.json();
}

export async function cancelarReserva(idReserva: number) {
  const res = await fetch(`${API_RESERVATIONS}/${idReserva}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("No se pudo cancelar la reserva");

  return res.json();
}

export async function getReservaById(idReserva: number) {
  const res = await fetch(`${API_RESERVATIONS}/${idReserva}`, {
    method: "GET"
  }); 
  
  if (!res.ok) throw new Error("Reserva no encontrada");

  return res.json();
}


export async function getReservaDetalleById(idReserva: number) {
  const res = await fetch(`${API_RESERVATIONS}/detalle/${idReserva}`,{
    method: "GET"
  });

  if (!res.ok) throw new Error("Reserva no encontrada");

  return res.json();
}