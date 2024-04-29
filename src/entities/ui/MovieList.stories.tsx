import { Meta, StoryObj } from '@storybook/react'

import { MovieList } from "@/entities/ui/MovieList";
import { movieListMock } from '@/shared/mock/movie-list.mock'

const meta: Meta<typeof MovieList> = {
  component: MovieList,
}
export default meta

type Story = StoryObj<typeof MovieList>

export const Example: Story = {
  args: {
    movieList: movieListMock.results,
  },
}
