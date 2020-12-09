import React from 'react';
import { render } from '@testing-library/react';
import ChatBotPage from './chat-bot'

describe('Chat Bot Page', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<ChatBotPage />);
        expect(getByTestId('header-text')).toHaveTextContent('Weathr.io Chat is here to enlighten the soul')

    })
})
