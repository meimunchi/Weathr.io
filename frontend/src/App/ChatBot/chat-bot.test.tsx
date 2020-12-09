import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import ChatBotPage from './chat-bot'
import App from '../App'
import ChatMenu from './chat-menu'
import { MemoryRouter } from 'react-router'

describe('Chat Bot Page', () => {
    afterEach(cleanup)

    it('renders correctly', () => {
        const { getByTestId } = render(<ChatBotPage />)
        expect(getByTestId('header-text')).toHaveTextContent('Weathr.io Chat is here to enlighten the soul')

    })

    it('correctly displays menu when pressed', () => {
        window.history.pushState({}, 'Test page', '/chat')
        render(<App />, { wrapper: MemoryRouter })
        fireEvent.click(screen.getByTestId('menu-button'))
        expect(screen.getByTestId('menu-title')).toBeVisible()
    })
})





