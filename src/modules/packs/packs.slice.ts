import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import { packsApi } from "@/modules/packs/api/packs.api"
import {
  CardPacksResponseType,
  DeleteCardsPackType,
  GetCardsPackType,
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
  async (arg: UpdateCardsPackType) => {
    await packsApi.updatePack(arg)
    return await packsApi.getPacks(arg.params).then((res) => {
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPacks.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(setPacks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(setPacks.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(newPack.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(newPack.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(newPack.rejected, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(updateCardsPack.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(updateCardsPack.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(updateCardsPack.rejected, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(deletePack.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(deletePack.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(deletePack.rejected, (state, action) => {
      state.isLoading = false
    })
  },
})

export const packsReducer = slice.reducer

export const packsThunk = { setPacks, newPack, deletePack, updateCardsPack }
