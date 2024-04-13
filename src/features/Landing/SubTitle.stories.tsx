import { Meta, StoryObj } from '@storybook/react'

import { subTitleList } from '@/features/Landing/constants'
import { SubTitle } from '@/features/Landing/SubTitle'

const meta: Meta<typeof SubTitle> = {
  component: SubTitle,
}
export default meta

type Story = StoryObj<typeof SubTitle>

export const Example: Story = {
  args: {
    subTitleList: subTitleList,
  },
}
