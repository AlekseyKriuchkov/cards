import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authApi } from "@/modules/auth/api/auth.api"

const register = createAsyncThunk("auth/register", (arg, thunkAPI) => {
  authApi
    .register({ email: "99pozit32iv11@mail.ru", password: "qwer1thyui" })
    .then((res) => {
      console.log(res)
    })
})

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
})

export const authReducer = slice.reducer

export const authThunk = { register }
