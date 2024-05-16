import { faker } from '@faker-js/faker'

import { ProfileContent } from '@/entities/movie/model/content'

export function generateProfileContent(numArrays: number) {
  return Array(numArrays)
    .fill('')
    .map(() => {
      const data: ProfileContent = {
        id: faker.number.int(1000),
        isMine: true,
        content: faker.lorem.text(),
        isLike: true,
        movieId: 854762,
        likeCount: faker.number.int(10),
        updateAt: '2024-10-08',
        createAt: '2024-10-08',
        movieTitle: '타다: 대한민국 스타트업의 초상',
        writer: {
          email: faker.internet.email(),
          profileUrl: faker.image.avatar(),
          nickname: faker.person.fullName(),
        },
      }
      return data
    })
}
