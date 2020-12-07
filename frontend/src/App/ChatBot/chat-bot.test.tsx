import React from 'react';
import { render } from '@testing-library/react';
import ChatBotPage from './chat-bot'

describe('Chat Bot Page', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<ChatBotPage />);
        expect(getByTestId('header')).toHaveTextContent('Click here to view the menu options for the chat box.');
    })
})

// possible tests: when input is entered, check if input is showing in textbot div
// working drop down menu