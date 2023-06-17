import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/app/store"

const slice = createSlice({
  name: "app",
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

export const isLoading = (state: RootState) => state.app.isLoading

export const appReducer = slice.reducer

export const appActions = slice.actions