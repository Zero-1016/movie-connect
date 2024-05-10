import { http, HttpResponse } from "msw";

import { User } from "@/shared/api/model";

const user: User[] = [
    { nickname: "zero", email: "zero@naver.com", profileUrl: null }
]

export const userHandlers = [
    http.post('/user/sign-in', () => {
        console.info('로그인');
        return HttpResponse.json(user[1], {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
]
