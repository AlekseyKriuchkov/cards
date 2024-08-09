import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import { packsApi } from "@/modules/packs/api/packs.api"
import {
  CardPacksResponseType,
  DeleteCardsPackType,
  GetCardsPackType,
  NewCardsPackType,
  PackResponseType,
  UpdateCardsPackType,
} from "@/modules/packs/types"

type InitialState = {
  cards: null | CardPacksResponseType
  isLoading: boolean
}

const initialState: InitialState = {
  cards: null,
  isLoading: false,
}

const setPacks = createAppAsyncThunk("packs/get", (arg: GetCardsPackType) => {
  return packsApi.getPacks(arg).then((res) => {
    return { payload: res.data }
  })
})
const newPack = createAppAsyncThunk("packs/post", (arg: NewCardsPackType) => {
  return packsApi.newPack(arg).then((res) => {
    return { payload: res.data }
  })
})
const updateCardsPack = createAppAsyncThunk(
  "packs/put",
  async (arg: UpdateCardsPackType) => {
    return packsApi.updatePack(arg).then((res) => {
      return { payload: res.data }
    })
  },
)
const deletePack = createAppAsyncThunk(
  "packs/delete",
  (arg: DeleteCardsPackType) => {
    return packsApi.deletePack(arg).then((res) => {
      return { payload: res.data }
    })
  },
)
const slice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setPacks.fulfilled, (state, action) => {
      state.cards = action.payload.payload
      state.isLoading = false
    })
    builder.addCase(setPacks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(setPacks.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(
      newPack.fulfilled,
      (state, action: PayloadAction<{ payload: PackResponseType }>) => {
        state.cards?.cardPacks.unshift(action.payload.payload.newCardsPack)
        state.isLoading = false
      },
    )
    builder.addCase(newPack.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(newPack.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(
      updateCardsPack.fulfilled,
      (state, action: PayloadAction<{ payload: PackResponseType }>) => {
        const updatedCardIndex = state.cards?.cardPacks.findIndex(
          (pack) => pack._id === action.payload.payload.updatedCardsPack._id,
        )
        if (state.cards && updatedCardIndex && updatedCardIndex > -1) {
          state.cards.cardPacks[updatedCardIndex] =
            action.payload.payload.updatedCardsPack
        }
        state.isLoading = false
      },
    )
    builder.addCase(updateCardsPack.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(updateCardsPack.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(
      deletePack.fulfilled,
      (state, action: PayloadAction<{ payload: PackResponseType }>) => {
        const deletedCardIndex = state.cards?.cardPacks.findIndex(
          (pack) => pack._id === action.payload.payload.deletedCardsPack._id,
        )
        if (deletedCardIndex && deletedCardIndex > -1) {
          state.cards?.cardPacks.splice(deletedCardIndex, 1)
        }
        state.isLoading = false
      },
    )
    builder.addCase(deletePack.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(deletePack.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const packsReducer = slice.reducer

export const packsThunk = { setPacks, newPack, deletePack, updateCardsPack }
