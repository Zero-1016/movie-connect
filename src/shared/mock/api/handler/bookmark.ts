import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";

export const bookmarkHandlers = [
    http.get('/bookmark/:movieId', () => {
        return HttpResponse.json({
            isLike: faker.datatype.boolean()
        })
    })
]
