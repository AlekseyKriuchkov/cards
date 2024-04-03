import { cardsInstance } from "@/modules/cards/api/cards.instance"
import {
  DeleteCardRequestType,
  GetPackCardsResponseType,
  GetPackCardsType,
  NewCardRequestType,
  UpdateCardRequestType,
} from "@/modules/cards/api/types"

export const cardsApi = {
  getCards: (params: GetPackCardsType) => {
    return cardsInstance.get<GetPackCardsResponseType>("", { params })
  },
  newCard: (params: NewCardRequestType) => {
    return cardsInstance.post("", { params })
  },
  deleteCard: (params: DeleteCardRequestType) => {
    return cardsInstance.delete("", { params })
  },
  updateCard: (params: UpdateCardRequestType) => {
    return cardsInstance.put("", { params })
  },
}
