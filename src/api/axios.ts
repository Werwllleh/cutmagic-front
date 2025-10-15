import axios from "axios";
import {getContentType} from "@/api/api.helper";
import {BASE_URL} from "@/consts";


const axiosOptions = {
  baseURL: BASE_URL,
  headers: getContentType(),
  withCredentials: true
}

export const axiosClassic = axios.create(axiosOptions)
