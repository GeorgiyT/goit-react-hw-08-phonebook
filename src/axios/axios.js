import axios from "axios";
import store from "../components/redux/store";

const httpClient = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
  headers: { Authorization: `Bearer ${store.getState().userAuth.token}` }
});

export default httpClient;
