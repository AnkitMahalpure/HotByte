import axios from "axios";
import { publicInstance, userInstance } from "../requestMethod";
const BASE_REST_API_URL = "http://localhost:8080";

class HotelService {
  getHotelByUsername(username) {
    return userInstance.get(`/hotel/${username}`);
  }
  createMenuItem(data) {
    return userInstance.post("hotel/add-menuitem", data);
  }
}
export default new HotelService();
