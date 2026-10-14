import { API_USERS } from "../config/api";
import type { User } from "../interfaces/User";

export async function getAllUsers(): Promise<User[]> {
  const res = await fetch(`${API_USERS}/all`);
  return res.json();
}

export async function getWorkers(): Promise<User[]> {
  const res = await fetch(`${API_USERS}/workers`);
  return res.json();
}
