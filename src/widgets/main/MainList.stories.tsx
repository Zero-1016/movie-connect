import { Meta, StoryObj } from '@storybook/react'

import { MainList } from '@/widgets/Main/MainList'

const meta: Meta<typeof MainList> = {
  component: MainList,
}
export default meta

type Story = StoryObj<typeof MainList>

export const Example: Story = {
  args: {},
}
