import axios from "axios"
import { BACKEND_URL } from "../config/config"

export const getGeneralContent = async () => {
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const data = await axios.get(BACKEND_URL + "/items/general_content/")
console.log('data recieved ' + data)
return data
}

export const getRestaurants = () => {
 return axios.get(BACKEND_URL + "/items/restaurant/")
}