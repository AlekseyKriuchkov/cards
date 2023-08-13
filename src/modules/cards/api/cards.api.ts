import { cardsInstance } from "@/modules/cards/api/cards.instance"
import {
  CardPacksResponseType,
  DeleteCardsPackType,
  GetCardsPackType,
  NewCardsPackType,
  UpdateCardsPackType,
} from "@/modules/cards/api/types"

export const cardsApi = {
  getCardsPack: (params: GetCardsPackType) => {
    return cardsInstance.get<CardPacksResponseType>("", { params })
  },
  newCardsPack: (params: NewCardsPackType) => {
    return cardsInstance.post("", params)
  },
  deleteCardsPack: (params: DeleteCardsPackType) => {
    return cardsInstance.delete("", { params })
  },
  updateCardsPack: (params: UpdateCardsPackType) => {
    return cardsInstance.put("", params)
  },
}
