import { User } from "@/shared/api/model/user";

export interface Content {
    id: number
    writer : User
    content: string
    createAt: string
    updateAt: string
    isLike: boolean
    isMine: boolean
    likeCount: number
}
