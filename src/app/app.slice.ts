import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/app/store"

type InitialState = {
  error: string | null
  isLoading: boolean
}

const initialState: InitialState = {
  error: null,
  isLoading: false,
}

const slice = createSlice({
  name: "app",
  initialState,
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

export const { setIsLoading } = slice.actions
