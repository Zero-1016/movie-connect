import { pretendard } from '../src/shared/pretendard'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: Story => (
    <div className={pretendard.className}>
      <Story />
    </div>
  ),
}

export default preview
