import { configureStore } from "@reduxjs/toolkit"
import { appReducer } from "@/app/app.slice"
import { authReducer } from "@/modules/auth/auth.slice"
import { packsReducer } from "@/modules/packs/packs.slice"
import { cardsReducer } from "@/modules/cards/cards.slice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    packs: packsReducer,
    cards: cardsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
