import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi } from "@/modules/auth/api/auth.api"
import {
  AuthMeUpdate,
  ErrorType,
  ForgotPasswordType,
  LoginType,
  NewPasswordType,
  RegisterType,
  User,
} from "@/modules/auth/api/types"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import { AxiosError } from "axios"

type InitialState = {
  user: User | null
  isSuccess: boolean
  isLoading: boolean
}

const initialState: InitialState = {
  user: null,
  isSuccess: false,
  isLoading: false,
}

const register = createAppAsyncThunk("auth/register", (arg: RegisterType) => {
  return authApi.register(arg).then(() => {
    return { isSuccess: true }
  })
})
const login = createAppAsyncThunk("auth/login", async (arg: LoginType) => {
  return authApi
    .login(arg)
    .then((res) => {
      return { user: res.data }
    })
    .catch((e) => {
      const error = e as AxiosError<ErrorType>
      console.log(error?.response?.data.error)
    })
})
const logOut = createAppAsyncThunk("auth/logOut", async (arg: {}) => {
  return authApi.authMeLogOut(arg).then((res) => {
    console.log(res)
  })
})
const authMe = createAppAsyncThunk("authMe/me", async () => {
  return authApi.authMe().then((res) => {
    return { user: res.data }
  })
})
const authMeUpdate = createAppAsyncThunk(
  "authMe/login",
  async (arg: AuthMeUpdate) => {
    return authApi.authMeUpdate(arg).then((res) => {
      return { user: res.data.updatedUser }
    })
  },
)
const forgot = createAppAsyncThunk(
  "authMe/forgot",
  (arg: ForgotPasswordType) => {
    return authApi.forgot(arg).then(() => {
      return { isSuccess: true }
    })
  },
)
const newPassword = createAppAsyncThunk(
  "authMe/newPassword",
  (arg: NewPasswordType) => {
    return authApi.setNewPassword(arg).then(() => {
      return { isSuccess: true }
    })
  },
)
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload.isSuccess) state.isSuccess = action.payload.isSuccess
      state.isLoading = false
    })
    builder.addCase(register.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload?.user) state.user = action.payload.user
      state.isLoading = false
    })
    builder.addCase(login.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(authMe.fulfilled, (state, action) => {
      if (action.payload?.user) state.user = action.payload.user
      state.isLoading = false
    })
    builder.addCase(authMe.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(authMe.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(authMeUpdate.fulfilled, (state, action) => {
      if (action.payload?.user) state.user = action.payload.user
      state.isLoading = false
    })
    builder.addCase(authMeUpdate.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = null
      state.isLoading = false
    })
    builder.addCase(logOut.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(forgot.fulfilled, (state, action) => {
      if (action.payload.isSuccess) state.isSuccess = action.payload.isSuccess
      state.isLoading = false
    })
    builder.addCase(forgot.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(newPassword.fulfilled, (state, action) => {
      if (action.payload.isSuccess) state.isSuccess = action.payload.isSuccess
      state.isLoading = false
    })
    builder.addCase(newPassword.pending, (state) => {
      state.isLoading = true
    })
  },
})

export const authReducer = slice.reducer

export const { setIsSuccess } = slice.actions

export const authThunk = {
  register,
  login,
  logOut,
  authMe,
  forgot,
  newPassword,
  authMeUpdate,
}
