import localFont from 'next/font/local'
import RQProvider from '../src/shared/lib/react-query/RQProvider'
import type { Preview } from '@storybook/react'

export const pretendard = localFont({
  variable: '--font-pretendard',
  src: [
    {
      path: '../public/fonts/Pretendard-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
})

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
    <div id="body-root" className={pretendard.className}>
      <RQProvider>
        <Story />
      </RQProvider>
    </div>
  ),
}

export default preview
