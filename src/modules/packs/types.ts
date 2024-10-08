export type PackResponseType = {
  [key in
    | "newCardsPack"
    | "deletedCardsPack"
    | "updatedCardsPack"]: CardsPackType
} & {
  token: string
  tokenDeathTime: number
}

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
export type PacksParams = {
  packName?: string
  min?: number
  max?: number
  page?: number
  pageCount?: number
  sortPacks?: string
  user_id?: string
}

export type UrlPacksParams = {
  packName?: string
  min?: string | null
  max?: string
  page?: string
  pageCount?: string
  sortPacks?: string
  user_id?: string
}

export type GetCardsPackType = {
  packName?: string
  min?: number
  max?: number
  page?: number
  pageCount?: number
  block?: boolean
  user_id?: string
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
  params: GetCardsPackType
  cardsPack: {
    _id: string
    name: string
    private: boolean
  }
}
export type PacksModalType = {
  actionType: "delete" | "edit" | "addNewCard"
  packId?: string
  packName?: string
  private?: boolean
} | null
