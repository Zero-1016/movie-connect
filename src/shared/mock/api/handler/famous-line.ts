import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

import { Content, ContentResponse, User } from "@/shared/api/model";
import { generateDate } from "@/shared/mock/construct";

const user: User[] = [
    { nickname: "zero", email: "zero@naver.com", profileUrl: null },
    { nickname: "tester", email: "test@naver.com", profileUrl: null },
    { nickname: "sujin", email: "sujin@naver.com", profileUrl: null },
]

export const famousLineHandlers = [
    http.get('/famousLine', ({ request }) => {
        const url = new URL(request.url)
        const page = parseInt(url.searchParams.get('page') as string) || 0
        const movieId = parseInt(url.searchParams.get('movieId') as string) || 0
        const reviewCount = Math.floor(Math.random() * 10)
        const responseData: ContentResponse = {
            data: Array(reviewCount).fill('').map((v, i) => {
                const id = page + i
                const data: Content = {
                    id,
                    writer: user[Math.floor(Math.random() * 3)],
                    content: `the content is mock data in ${movieId}`,
                    createAt: generateDate().toString(),
                    updateAt: generateDate().toString(),
                    isLike: faker.datatype.boolean(),
                    isMine: faker.datatype.boolean(),
                    likeCount: faker.number.int(10)
                }
                return data
            }),
            curpage: page,
            total: faker.number.int({ min: page, max: page + 3 })
        }
        return HttpResponse.json(responseData)
    })
]
