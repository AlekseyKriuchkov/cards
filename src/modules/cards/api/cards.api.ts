import {
  cardsInstance,
  updateGradeInstance,
} from "@/modules/cards/api/cards.instance"
import {
  DeleteCardRequestType,
  GetPackCardsResponseType,
  GetPackCardsType,
  NewCardRequestType,
  UpdateCardGradeRequestType,
  UpdateCardRequestType,
} from "@/modules/cards/types"

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
  updateGrade: (params: UpdateCardGradeRequestType) => {
    return updateGradeInstance.put("", params)
  },
}
