import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

export const bookmarkHandlers = [
  http.get('/bookmark/:movieId', ({ params }) => {
    const { movieId } = params

    if (!movieId) {
      return HttpResponse.json(null, { status: 400, statusText: '영화 아이디가 없습니다.' })
    }

    return HttpResponse.json(
      {
        isLike: faker.datatype.boolean(),
      },
      { status: 200, statusText: `${movieId} 데이터를 불러오는 것을 성공하였습니다.` },
    )
  }),
  http.post('/bookmark', () => {
    return HttpResponse.json(
      {
        message: 'success',
      },
      { status: 200, statusText: '전송에 성공하였습니다.' },
    )
  }),
  http.delete('/bookmark/:movieId', ({ params }) => {
    const { movieId } = params

    if (!movieId) {
      return HttpResponse.json(null, { status: 400, statusText: '영화 아이디가 없습니다.' })
    }

    return HttpResponse.json(
      {
        message: 'success',
      },
      { status: 200, statusText: `${movieId} 삭제에 성공하였습니다.` },
    )
  }),
]
