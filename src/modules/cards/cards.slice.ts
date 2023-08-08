import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
})

export const cardsReducer = slice.reducer
