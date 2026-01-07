import axios from "axios";

const API_URL = "https://localhost:7188/api/account";

export interface LoginData {
  userName: string;
  password: string;
}

export interface RegisterData {
  userName: string;
  displayName: string;
  password: string;
}

export const login = async (data: LoginData) => {
  const response = await axios.post(`${API_URL}/login`, data);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await axios.post(`${API_URL}/register`, data);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export {};
