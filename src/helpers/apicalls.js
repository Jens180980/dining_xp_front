import axios from "axios"
import { BACKEND_URL } from "../config/config"

export const getGeneralContent = () => {
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
return axios.get(BACKEND_URL + "/items/general_content/")
}

export const getRestaurants = () => {
 return axios.get(BACKEND_URL + "/items/restaurant/")
}