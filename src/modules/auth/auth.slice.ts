import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/app/store"

const slice = createSlice({
  name: "auth",
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
  },
})

export const isLoading = (state: RootState) => state.auth.isLoading

export const authReducer = slice.reducer

export const authActions = slice.actions
