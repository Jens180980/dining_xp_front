import axios from "axios"
import { BACKEND_URL } from "../config/config"

export const getGeneralContent = async () => {
return await axios.get(BACKEND_URL + "/items/general_content/")
}

export const getRestaurants = () => {
 return axios.get(BACKEND_URL + "/items/restaurant/")
}