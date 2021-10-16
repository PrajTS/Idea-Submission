interface IIdea {
  _id?: string
  title: string
  description: string
  tags: string[] | []
  votes?: number
  hasVoted?: boolean
  createdAt?: string
  updatedAt?: string
}

type Data = {
  success: boolean
  data?: any
}
