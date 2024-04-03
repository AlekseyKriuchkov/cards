import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import {
  CardsModalType,
  DeleteCardRequestType,
  GetPackCardsResponseType,
  GetPackCardsType,
  NewCardRequestType,
  UpdateCardRequestType,
} from "@/modules/cards/api/types"
import { cardsApi } from "@/modules/cards/api/cards.api"
import { createSlice } from "@reduxjs/toolkit"

const setCards = createAppAsyncThunk("cards/get", (arg: GetPackCardsType) => {
  return cardsApi.getCards(arg).then((res) => {
    return { card: res.data }
  })
})
const newCard = createAppAsyncThunk("cards/post", (arg: NewCardRequestType) => {
  return cardsApi.newCard(arg).then((res) => {
    return { card: res.data }
  })
})
const deleteCard = createAppAsyncThunk(
  "cards/delete",
  (arg: DeleteCardRequestType) => {
    return cardsApi.deleteCard(arg).then((res) => {
      return { card: res.data }
    })
  },
)
const updateCard = createAppAsyncThunk(
  "cards/update",
  (arg: UpdateCardRequestType) => {
    return cardsApi.updateCard(arg).then((res) => {
      return { card: res.data }
    })
  },
)

const slice = createSlice({
  name: "pack",
  initialState: {
    card: null as null | GetPackCardsResponseType,
    isLoading: false,
    modalType: {} as CardsModalType,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCards.fulfilled, (state, action) => {
      state.card = action.payload.card
      state.isLoading = false
    })
    builder.addCase(setCards.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(newCard.fulfilled, (state, action) => {
      state.card = action.payload.card
    })
    builder.addCase(deleteCard.fulfilled, (state, action) => {
      state.card = action.payload.card
    })
    builder.addCase(updateCard.fulfilled, (state, action) => {
      state.card = action.payload.card
    })
  },
})

export const cardsReducer = slice.reducer

export const cardsThunk = { setCards, newCard, deleteCard, updateCard }
