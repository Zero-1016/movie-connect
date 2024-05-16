import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

import { Content, ContentResponse } from '@/entities/movie/model'

import { generateDate } from '../../../generate'

export const reviewHandlers = [
  http.get('/review', ({ request }) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page')
    const movieId = url.searchParams.get('movieId')
    if (!page || !movieId) {
      return HttpResponse.json(null, { status: 400, statusText: '잘못된 리뷰 요청입니다.' })
    }
    const cur_page = parseInt(page)

    const responseData: ContentResponse = {
      results: Array(faker.number.int(10))
        .fill('')
        .map((v, i) => {
          const data: Content = {
            id: cur_page + i,
            writer: {
              email: faker.internet.email(),
              profileUrl: faker.image.avatar(),
              nickname: faker.person.fullName(),
            },
            content: `the content is mock data in ${movieId}`,
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
  http.post('/review', async request => {
    const review = await request
    return HttpResponse.json(review, { status: 201, statusText: '리뷰를 작성하였습니다.' })
  }),
  http.put('/review', async request => {
    const review = await request
    return HttpResponse.json(review, { status: 201, statusText: '리뷰를 수정하였습니다.' })
  }),
  http.post('/review/like/:reviewId', ({ params }) => {
    const { reviewId } = params

    if (!reviewId) {
      return HttpResponse.json({ status: 400, statusText: '수정할 리뷰가 없습니다.' })
    }

    return HttpResponse.json(reviewId, { status: 201, statusText: '리뷰를 수정하였습니다.' })
  }),
  http.delete('/review/like/:reviewId', ({ params }) => {
    const { reviewId } = params

    if (!reviewId) {
      return HttpResponse.json({ status: 400, statusText: '삭제할 좋아요한 리뷰가 없습니다.' })
    }

    return HttpResponse.json(reviewId, { status: 201, statusText: '리뷰 좋아요를 취소하였습니다.' })
  }),
]
