import {
  cardsInstance,
  updateGradeInstance,
} from "@/modules/cards/api/cards.instance"
import {
  DeleteCardRequestType,
  GetPackCardsResponseType,
  GetPackCardsType,
  NewCardRequestType,
  NewCardResponseType,
  UpdateCardGradeRequestType,
  UpdateCardRequestType,
  UpdateCardResponseType,
} from "@/modules/cards/types"

export const cardsApi = {
  getCards: (params: GetPackCardsType) => {
    return cardsInstance.get<GetPackCardsResponseType>("", { params })
  },
  newCard: (params: NewCardRequestType) => {
    return cardsInstance.post<NewCardResponseType>("", params)
  },
  deleteCard: (params: DeleteCardRequestType) => {
    return cardsInstance.delete("", { params })
  },
  updateCard: (params: UpdateCardRequestType) => {
    return cardsInstance.put<UpdateCardResponseType>("", params)
  },
  updateGrade: (params: UpdateCardGradeRequestType) => {
    return updateGradeInstance.put("", params)
  },
}
