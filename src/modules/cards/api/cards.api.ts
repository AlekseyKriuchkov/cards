import { cardsInstance } from "@/modules/cards/api/cards.instance"
import {
  DeleteCardsPackType,
  GetCardsPackResponseType,
  GetCardsPackType,
  NewCardsPackType,
  UpdateCardsPackType,
} from "@/modules/cards/api/types"

export const cardsApi = {
  getCardsPack: (params: GetCardsPackType) => {
    return cardsInstance.get<GetCardsPackResponseType>("", { params })
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
