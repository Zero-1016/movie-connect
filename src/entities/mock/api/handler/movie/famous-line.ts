import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

import { Content, ContentResponse } from '@/entities/movie/model'
import { User } from '@/entities/user/model'

import { generateDate } from '../../../generate'

const user: User[] = [
  { nickname: 'zero', email: 'zero@naver.com', profileUrl: null },
  { nickname: 'tester', email: 'test@naver.com', profileUrl: null },
  { nickname: 'sujin', email: 'sujin@naver.com', profileUrl: null },
]

export const famousLineHandlers = [
  http.get('/famousLine', ({ request }) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page')
    const movieId = url.searchParams.get('movieId')
    if (!page || !movieId) {
      return HttpResponse.json(null, { status: 400, statusText: '잘못된 명대사 요청입니다.' })
    }
    const cur_page = parseInt(page)

    const responseData: ContentResponse = {
      results: Array(faker.number.int(10))
        .fill('')
        .map((v, i) => {
          const data: Content = {
            id: cur_page + i,
            writer: user[Math.floor(Math.random() * 3)],
            content: faker.lorem.text(),
            createAt: generateDate().toString(),
            updateAt: generateDate().toString(),
            isLike: faker.datatype.boolean(),
            isMine: faker.datatype.boolean(),
            likeCount: faker.number.int(10),
          }
          return data
        }),
      page: cur_page,
      total_pages: 10,
      total_results: 190,
    }
    return HttpResponse.json(responseData, { status: 201 })
  }),
  http.post('/famousLine', async request => {
    const newFamousLine = await request
    return HttpResponse.json(newFamousLine, { status: 201, statusText: 'success' })
  }),
  http.put('/famousLine', async request => {
    const newFamousLine = await request
    return HttpResponse.json(newFamousLine, { status: 201, statusText: 'success' })
  }),
  http.post('/famousLine/like/:famousLineId', ({ params }) => {
    const { famousLineId } = params

    if (!famousLineId) {
      return HttpResponse.json(null, { status: 400, statusText: 'fail' })
    }

    return HttpResponse.json(famousLineId, { status: 201, statusText: 'success' })
  }),
  http.delete('/famousLine/like/:famousLineId', ({ params }) => {
    const { famousLineId } = params

    if (!famousLineId) {
      return HttpResponse.json(null, { status: 400, statusText: 'fail' })
    }

    return HttpResponse.json(famousLineId, { status: 201, statusText: 'success' })
  }),
]
