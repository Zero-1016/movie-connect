import RQProvider from '../src/shared/lib/react-query/RQProvider'
import type {Preview} from '@storybook/react'
import Provider from "../src/app/Provider";
import '../app/global.scss'

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
            <RQProvider>
                <Story/>
            </RQProvider>
        </Provider>),
}

export default preview
