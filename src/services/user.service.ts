import { API } from "@/config/API";
import axios from "axios";

class User {
  getUser() {
    return axios.get(`${API.user.GETUSER}`, { withCredentials: true });
  }
}

const userService = new User();
export default userService;