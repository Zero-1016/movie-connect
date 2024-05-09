import { Meta, StoryObj } from '@storybook/react'

import { MovieCard } from '@/entities/ui/MovieCard'
import { movieListMock } from '@/shared/mock/data/movie-list.mock'

const meta: Meta<typeof MovieCard> = {
  component: MovieCard,
}
export default meta

type Story = StoryObj<typeof MovieCard>

export const Example: Story = {
  args: {
    movieData: movieListMock.results[0],
  },
}
