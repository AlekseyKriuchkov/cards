import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authApi } from "@/modules/auth/api/auth.api"
import { LoginType, RegisterType } from "@/modules/auth/api/types"

const register = createAsyncThunk("auth/register", (arg: RegisterType) => {
  authApi.register(arg).then((res) => {
    console.log(res)
  })
})
const login = createAsyncThunk("auth/login", (arg: LoginType) => {
  authApi.login(arg).then((res) => {
    console.log(res)
  })
})
const authMe = createAsyncThunk("authMe/login", () => {
  authApi.authMe().then((res) => {
    console.log(res)
  })
})

const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
})

export const authReducer = slice.reducer

export const authThunk = { register, login, authMe }
