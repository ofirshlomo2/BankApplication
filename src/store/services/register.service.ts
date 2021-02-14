import { IUserDetails } from "../../components/containers/pages/register";
import axios from "axios"
export const BASE_URL = "http://localhost:5000"
const API_URL = `${BASE_URL}/auth/register`
export default async function registerService(userDetails: IUserDetails) {
    const { data } = await axios.post(`${API_URL}`, userDetails)
    return data.message
}