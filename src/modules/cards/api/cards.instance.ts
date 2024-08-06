import axios from "axios"

export const cardsInstance = axios.create({
  baseURL: "https://neko-back.herokuapp.com/2.0/cards/card",
  withCredentials: true,
})

export const updateGradeInstance = axios.create({
  baseURL: "https://neko-back.herokuapp.com/2.0/cards/grade",
  withCredentials: true,
})
