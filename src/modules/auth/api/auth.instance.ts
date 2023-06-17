import axios from "axios"

export const authInstance = axios.create({
  baseURL: "https://neko-back.herokuapp.com/2.0/auth/",
  withCredentials: true,
})
