export type AnswerModel = {
  answer: string
  image?: string
}

export type SurveyModel = {
  id: string
  question: string
  answers: AnswerModel[]
  date: Date
  didAnswer: boolean
}
