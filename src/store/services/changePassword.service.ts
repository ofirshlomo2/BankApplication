import axios from "axios"
import { BASE_URL } from "./register.service";
import { IChangePassword } from "../../components/containers/pages/changePassword";

const API_URL = `${BASE_URL}/auth/changePassword`
export default async function changePasswordService(changePasswordDetails: IChangePassword) {
    const { data } = await axios.post(`${API_URL}`, changePasswordDetails)
    return data.message
}