import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import { packsApi } from "@/modules/packs/api/packs.api"
import {
  CardPacksResponseType,
  DeleteCardsPackType,
  GetCardsPackType,
  PacksModalType,
  NewCardsPackType,
  UpdateCardsPackType,
} from "@/modules/packs/api/types"

const setPacks = createAppAsyncThunk("packs/get", (arg: GetCardsPackType) => {
  return packsApi.getPacks(arg).then((res) => {
    return { cards: res.data }
  })
})
const newPack = createAppAsyncThunk("packs/post", (arg: NewCardsPackType) => {
  return packsApi.newPack(arg).then((res) => {
    return { cards: res.data }
  })
})
const updateCardsPack = createAppAsyncThunk(
  "packs/put",
  (arg: UpdateCardsPackType) => {
    return packsApi.updatePack(arg).then((res) => {
      return { cards: res.data }
    })
  },
)
const deletePack = createAppAsyncThunk(
  "packs/delete",
  (arg: DeleteCardsPackType) => {
    return packsApi.deletePack(arg).then((res) => {
      return { cards: res.data }
    })
  },
)
const slice = createSlice({
  name: "cards",
  initialState: {
    cards: null as null | CardPacksResponseType,
    isLoading: false,
    modalType: {} as PacksModalType,
  },
  reducers: {
    setModalType: (state, action: PayloadAction<PacksModalType>) => {
      state.modalType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPacks.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(setPacks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(newPack.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(updateCardsPack.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(deletePack.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
  },
})

export const { setModalType } = slice.actions

export const packsReducer = slice.reducer

export const packsThunk = { setPacks, newPack, deletePack, updateCardsPack }
