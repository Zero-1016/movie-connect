import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

export const bookmarkHandlers = [
  http.get('/bookmark/:movieId', ({ params }) => {
    const { movieId } = params

    if (!movieId) {
      return HttpResponse.json(null, { status: 401, statusText: 'Bad Request' })
    }

    return HttpResponse.json({
      isLike: faker.datatype.boolean(),
    })
  }),
  http.post('/bookmark', () => {
    return HttpResponse.json(
      {
        message: 'success',
      },
      { status: 200 },
    )
  }),
  http.delete('/bookmark/:movieId', ({ params }) => {
    const { movieId } = params

    if (!movieId) {
      return HttpResponse.json(null, { status: 401 })
    }

    return HttpResponse.json(
      {
        message: 'success',
      },
      { status: 200 },
    )
  }),
]
