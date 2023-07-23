import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi } from "@/modules/auth/api/auth.api"
import {
  LoginResponse,
  LoginType,
  RegisterType,
} from "@/modules/auth/api/types"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"

const register = createAppAsyncThunk("auth/register", (arg: RegisterType) => {
  authApi.register(arg).then((res) => {
    console.log(res)
  })
})
const login = createAppAsyncThunk<{ profile: LoginResponse }, LoginType>(
  "auth/login",
  async (arg) => {
    const response = await authApi.login(arg)
    console.log(response.data)
    return { profile: response.data }
  },
)
const authMe = createAppAsyncThunk("authMe/login", () => {
  authApi.authMe().then((res) => {
    console.log(res)
  })
})

const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as LoginResponse | null,
  },
  reducers: {
    setProfile: (state, action: PayloadAction<{ profile: LoginResponse }>) => {
      state.profile = action.payload.profile
    },
  },
})

export const authReducer = slice.reducer

export const authActions = slice.actions

export const authThunk = { register, login, authMe }
