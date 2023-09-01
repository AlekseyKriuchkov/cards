import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import { cardsApi } from "@/modules/cards/api/cards.api"
import {
  CardPacksResponseType,
  DeleteCardsPackType,
  GetCardsPackType,
  ModalType,
  NewCardsPackType,
} from "@/modules/cards/api/types"

const setCards = createAppAsyncThunk("cards/get", (arg: GetCardsPackType) => {
  return cardsApi.getCardsPack(arg).then((res) => {
    return { cards: res.data }
  })
})
const newPack = createAppAsyncThunk("cards/post", (arg: NewCardsPackType) => {
  return cardsApi.newCardsPack(arg).then((res) => {
    return { cards: res.data }
  })
})
const deletePack = createAppAsyncThunk(
  "cards/delete",
  (arg: DeleteCardsPackType) => {
    return cardsApi.deleteCardsPack(arg).then((res) => {
      return { cards: res.data }
    })
  },
)
const slice = createSlice({
  name: "cards",
  initialState: {
    cards: null as null | CardPacksResponseType,
    isLoading: false,
    modalType: {} as ModalType,
  },
  reducers: {
    setModalType: (state, action: PayloadAction<ModalType>) => {
      state.modalType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setCards.fulfilled, (state, action) => {
      state.cards = action.payload.cards
      state.isLoading = false
    })
    builder.addCase(setCards.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(newPack.fulfilled, (state, action) => {
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

export const cardsReducer = slice.reducer

export const cardsThunk = { setCards, newPack, deletePack }
