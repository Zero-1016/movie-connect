import type { Preview } from '@storybook/react'
import Provider from '../src/app/Provider'

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
    <Provider>
      <Story />
    </Provider>
  ),
}

export default preview
