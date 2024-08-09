import { createAppAsyncThunk } from "@/utils/create-app-async-thunk"
import {
  DeleteCardRequestType,
  GetPackCardsResponseType,
  GetPackCardsType,
  NewCardRequestType,
  UpdateCardGradeRequestType,
  UpdateCardRequestType,
} from "@/modules/cards/types"
import { cardsApi } from "@/modules/cards/api/cards.api"
import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
  card: null | GetPackCardsResponseType
  isLoading: boolean
}

const initialState: InitialState = {
  card: null,
  isLoading: false,
}

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
const updateGrade = createAppAsyncThunk(
  "cards/grade",
  (arg: UpdateCardGradeRequestType) => {
    return cardsApi.updateGrade(arg).then((res) => {
      return { card: res.data }
    })
  },
)

const slice = createSlice({
  name: "pack",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCards.fulfilled, (state, action) => {
      state.card = action.payload.card
      state.isLoading = false
    })
    builder.addCase(setCards.pending, (state) => {
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
    builder.addCase(updateGrade.fulfilled, (state, action) => {
      const updatedCardIndex = state.card?.cards.findIndex(
        (card) => card._id === action.payload.card._id,
      )
      if (
        updatedCardIndex !== undefined &&
        updatedCardIndex > -1 &&
        state.card !== null
      ) {
        state.card.cards[updatedCardIndex] = action.payload.card
      }
      state.isLoading = false
    })
    builder.addCase(updateGrade.pending, (state) => {
      state.isLoading = true
    })
  },
})

export const cardsReducer = slice.reducer

export const cardsThunk = {
  setCards,
  newCard,
  deleteCard,
  updateCard,
  updateGrade,
}
