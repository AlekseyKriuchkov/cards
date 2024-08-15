export type GetPackCardsType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}
export type GetPackCardsResponseType = {
  cards: CardType[]
  packUserId: string
  packName: string
  packPrivate: boolean
  packDeckCover: string
  packCreated: string
  packUpdated: string
  page: number
  pageCount: number
  cardsTotalCount: number
  minGrade: number
  maxGrade: number
  token: string
  tokenDeathTime: number
}
export type CardType = {
  _id: string
  cardsPack_id: string
  user_id: string
  question: string
  answer: string
  grade: number
  shots: number
  comments: string
  type: string
  rating: number
  created: string
  updated: string
}
export type NewCardRequestType = {
  card: {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}

export type NewCardResponseType = {
  newCard: {
    cardsPack_id: string
    user_id: string
    question: string
    answer: string
    grade: number
    shots: number
    comments: string
    type: string
    rating: number
    more_id: string
    _id: string
    created: string
    updated: string
    __v: number
  }
  token: string
  tokenDeathTime: number
}
export type DeleteCardRequestType = {
  id: string
}
export type UpdateCardRequestType = {
  card: {
    _id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}

export type UpdateCardResponseType = {
  updatedCard: {
    _id: string
    cardsPack_id: string
    user_id: string
    question: string
    answer: string
    grade: number
    shots: number
    comments: string
    type: string
    rating: number
    more_id: string
    created: string
    updated: string
    __v: number
  }
  token: string
  tokenDeathTime: number
}

export type PacksModalType = {
  actionType: "delete" | "edit" | "addNewCard"
  packId?: string
  packName?: string
  private?: boolean
} | null

export type CardsModalType = {
  actionType: "delete" | "edit"
  cardId?: string
  answer?: string
  question?: string
} | null

export type UpdateCardGradeRequestType = {
  grade: number
  card_id: string
}
