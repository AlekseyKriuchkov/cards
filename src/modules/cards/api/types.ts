export type CardPacksResponseType = {
  cardPacks: CardsPackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

export type CardsPackType = {
  _id: string
  user_id: string
  name: string
  cardsCount: number
  created: string
  updated: string
  user_name: string
  private: boolean
  deckCover: string
}
export type GetCardsPackType = {
  packName?: string
  min?: number
  max?: number
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
  sortPacks?: string
}
export type NewCardsPackType = {
  cardsPack: {
    name?: string
    deckCover?: string
    private?: boolean
  }
}
export type DeleteCardsPackType = {
  id: string
}
export type UpdateCardsPackType = {
  cardsPack: {
    _id: string
    name: string
  }
}
export type ModalType = {
  modalType: "delete" | "update" | "learn"
  pack_id: string
  pack_name: string
} | null
