import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "@/modules/auth/api/auth.api"
import {
  ErrorType,
  LoginType,
  RegisterType,
  User,
} from "@/modules/auth/api/types"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import { AxiosError } from "axios"
const register = createAppAsyncThunk("auth/register", (arg: RegisterType) => {
  authApi.register(arg).then((res) => {
    console.log(res)
  })
})
const login = createAppAsyncThunk("auth/login", async (arg: LoginType) => {
  return authApi
    .login(arg)
    .then((response) => {
      console.log(response.data)
      return { user: response.data }
    })
    .catch((e) => {
      const error = e as AxiosError<ErrorType>
      console.log(error?.response?.data.error)
    })
})
const authMe = createAppAsyncThunk("authMe/login", () => {
  authApi.authMe().then((res) => {
    console.log(res)
  })
})

const slice = createSlice({
  name: "auth",
  initialState: {
    user: null as User | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.user) state.user = action.payload.user
    })
  },
})

export const authReducer = slice.reducer

export const authActions = slice.actions

export const authThunk = { register, login, authMe }
