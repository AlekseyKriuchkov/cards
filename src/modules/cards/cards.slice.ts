import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import { cardsApi } from "@/modules/cards/api/cards.api"
import {
  CardPacksResponseType,
  GetCardsPackType,
} from "@/modules/cards/api/types"

const setCards = createAppAsyncThunk("cards/get", (arg: GetCardsPackType) => {
  return cardsApi.getCardsPack(arg).then((res) => {
    console.log(res.data.cardPacks)
    return { cards: res.data }
  })
})

const slice = createSlice({
  name: "cards",
  initialState: { cards: null as null | CardPacksResponseType },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCards.fulfilled, (state, action) => {
      state.cards = action.payload.cards
    })
  },
})

export const cardsReducer = slice.reducer

export const cardsThunk = { setCards }
