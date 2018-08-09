import axios from "axios";

import { BASE_URL, HOTELS_PATH } from "../Config/API";

export function getBase() {
  return axios.get(`${BASE_URL}`);
}
export function getHotels() {
  return axios.get(`${BASE_URL}/${HOTELS_PATH}`);
}
