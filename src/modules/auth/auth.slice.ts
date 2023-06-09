import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "auth",
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  reducers: {},
})

export const authReducer = slice.reducer
