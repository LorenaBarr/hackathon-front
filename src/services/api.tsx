/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api/v1/";

const SUPPLY_CHAIN_API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const foo = {
  async getFoo(): Promise<any[]> {
    const response = await SUPPLY_CHAIN_API.get(`foo`);
    return response.data;
  },
};

const routes = {
  async getRoutes(): Promise<any[]> {
    const response = await SUPPLY_CHAIN_API.get(`routes`);
    return response.data;
  },
};

const deliveriesByUser = {
  async getDeliveryByUser(userId: number): Promise<any[]> {
    const response = await SUPPLY_CHAIN_API.get(`deliveries/user/${userId}`);
    return response.data;
  },
};

const confirmDelivery = async (id: number) => {
  const response = await SUPPLY_CHAIN_API.post(`deliveries/${id}/confirm/`);
  return response.data;
};

const cancelDelivery = async (id: number) => {
  const response = await SUPPLY_CHAIN_API.post(`deliveries/${id}/cancel/`);
  return response.data;
};

const postDelivery = async (data: {
  product_name: string;
  weight_kg: number;
  total_price: number;
  transport_type: number;
  scheduled_at: string;
  user: number;
  delivery_route: number;
  recipient: string;
  recipient_address: string;
  is_auto_generated: boolean;
  is_confirmed: boolean;
}): Promise<any> => {
  const response = await SUPPLY_CHAIN_API.post("deliveries/create/", data);
  return response.data;
};

export {
  foo,
  routes,
  deliveriesByUser,
  postDelivery,
  confirmDelivery,
  cancelDelivery,
};
