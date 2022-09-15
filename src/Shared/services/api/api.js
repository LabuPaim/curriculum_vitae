
import { Environment } from "../../environment";
import axios from "axios";

const api = axios.create({
  baseURL: Environment.BASE_URL,
});

export default api