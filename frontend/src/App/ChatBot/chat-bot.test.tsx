import React from 'react';
import { render } from '@testing-library/react';
import ChatBotPage from './chat-bot'

describe('Chat Bot Page', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<ChatBotPage />);
        expect(getByTestId('header')).toHaveTextContent('Chat Bot is here to :) Find out what you can talk about here')
    })
})
