import {
  CardPacksResponseType,
  DeleteCardsPackType,
  GetCardsPackType,
  NewCardsPackType,
  UpdateCardsPackType,
} from "@/modules/packs/api/types"
import { packsInstance } from "@/modules/packs/api/packs.instance"

export const packsApi = {
  getPacks: (params: GetCardsPackType) => {
    return packsInstance.get<CardPacksResponseType>("", { params })
  },
  newPack: (params: NewCardsPackType) => {
    return packsInstance.post("", params)
  },
  deletePack: (params: DeleteCardsPackType) => {
    return packsInstance.delete("", { params })
  },
  updatePack: (params: UpdateCardsPackType) => {
    return packsInstance.put("", params)
  },
}
