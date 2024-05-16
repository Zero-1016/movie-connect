import { User } from '@/entities/user/model/user'

export interface Content {
  id: number
  writer: User
  content: string
  createAt: string
  updateAt: string
  isLike: boolean
  isMine: boolean
  likeCount: number
}

export interface ProfileContent extends Content {
  movieId: number
  movieTitle: string
}
