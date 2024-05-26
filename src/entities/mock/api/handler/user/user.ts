import { faker } from '@faker-js/faker'
import { http, HttpResponse } from 'msw'

import { generateProfileContent } from '@/entities/mock/generate/profile-content'
import { MyLikeMovie } from '@/entities/movie/model/movie'

const allUser = new Map()

allUser.set(1, { id: 1, nickname: 'zero', email: 'zero@naver.com', profileUrl: null })

export const userHandlers = [
  http.post('/user/sign-up', async ({ request }) => {
    const new_user = (await request.json()) as {
      nickname: string
      email: string
    }

    const new_id = allUser.size
    allUser.set(new_id, { id: new_id, ...new_user, profileUrl: null })

    return HttpResponse.json('ok', {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),
  http.post('/user/sign-in', () => {
    console.info('로그인')
    return HttpResponse.json(
      { id: 1, nickname: 'zero', email: 'zero@naver.com', profileUrl: null },
      {
        headers: {
          'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
        },
      },
    )
  }),
  http.post('/user/sign-out', () => {
    console.info('로그아웃')
    return new HttpResponse('ok', {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),
  http.get('/user/refresh-token', ({ cookies }) => {
    console.info(cookies)
  }),
  http.get('/user/email', () => {
    return HttpResponse.json('ok', { status: 200 })
  }),
  http.get('/user/nickname', () => {
    return HttpResponse.json('ok', { status: 200 })
  }),
  http.put('/user/profile', () => {
    return HttpResponse.json('ok', { status: 200 })
  }),
  http.put('/user/nickname', () => {
    return HttpResponse.json('ok', { status: 200 })
  }),
  http.put('/user/password', () => {
    return HttpResponse.json('ok', { status: 200 })
  }),
  http.get('/user/bookmark', ({ request }) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page')
    const movieId = url.searchParams.get('movieId')
    if (!page || !movieId) {
      return HttpResponse.json(null, { status: 400, statusText: '잘못된 리뷰 요청입니다.' })
    }
    const cur_page = parseInt(page)

    return HttpResponse.json({
      results: Array(faker.number.int(10))
        .fill('')
        .map(() => {
          const data: MyLikeMovie = {
            movieId: 854762,
            backdrop_path: '/deLWkOLZmBNkm8p16igfapQyqeq.jpg',
            poster_path: '/cV8xO8jgcUV34bZZckVlMj6exak.jpg',
            title: '스타트 업!',
            release_date: '2019-09-06',
            genres: [
              {
                id: 28,
                name: '액션',
              },
              {
                id: 12,
                name: '모험',
              },
              {
                id: 16,
                name: '애니메이션',
              },
              {
                id: 35,
                name: '코미디',
              },
              {
                id: 10751,
                name: '가족',
              },
            ],
          }
          return data
        }),
      page: cur_page,
      total_pages: 10,
      total_results: 190,
    })
  }),

  http.get('/user/review', ({ request }) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page')
    const movieId = url.searchParams.get('movieId')
    if (!page || !movieId) {
      return HttpResponse.json(null, { status: 400, statusText: '잘못된 리뷰 요청입니다.' })
    }
    const cur_page = parseInt(page)

    return HttpResponse.json({
      results: generateProfileContent(faker.number.int(10)),
      page: cur_page,
      total_pages: 10,
      total_results: 90,
    })
  }),

  http.get('/user/famousLine', ({ request }) => {
    const url = new URL(request.url)
    const page = url.searchParams.get('page')
    const movieId = url.searchParams.get('movieId')
    if (!page || !movieId) {
      return HttpResponse.json(null, { status: 400, statusText: '잘못된 명대사 요청입니다.' })
    }
    const cur_page = parseInt(page)

    return HttpResponse.json({
      results: generateProfileContent(faker.number.int(10)),
      page: cur_page,
      total_pages: 10,
      total_results: 90,
    })
  }),
]
