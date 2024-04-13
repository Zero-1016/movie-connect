import { Meta, StoryObj } from '@storybook/react'

import { MovieContainer } from '@/entities/ui/MovieContainer'
import { movieListMock } from '@/shared/mock/movie-list.mock'

const meta: Meta<typeof MovieContainer> = {
  component: MovieContainer,
  argTypes: {
    title: {
      description: '리스트 왼쪽 상단에 들어갈 타이틀을 말합니다.',
      type: 'string',
    },
    description: {
      description: '리스트 왼쪽 하단에 들어갈 타이틀에 대한 소제목을 말합니다.',
      type: 'string',
    },
    href: {
      description: '바로가기 버튼을 누를 경우 바로가게 될 링크 주소를 말합니다.',
      type: 'string',
    },
    movieList: {
      description: '영화들의 정보를 묶고있는 것을 얘기합니다.',
    },
  },
}
export default meta

type Story = StoryObj<typeof MovieContainer>

export const Example: Story = {
  args: {
    title: '최신 영화',
    description: '최신 영화 정보를 바로 만나보세요',
    href: '/new_movie',
    movieList: movieListMock.results,
  },
}
