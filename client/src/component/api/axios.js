import axios from "axios";
//development
// const baseUrl = "http://34.227.27.46:7000/api/v1";
const baseUrl = "http://localhost:7000/api/v1";

//production
// const baseURl =
export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 20000,
  // withCredentials: true,
});
