import React from 'react'
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router'

describe('App component', () => {
  afterEach(cleanup)

  it('renders', () => {
    const { container } = render(<App/>)

    expect(container).toBeInTheDocument()
    expect(screen.getByTestId('nav-container')).toBeInTheDocument()
  })

  it('renders appropriate content based on clicking navigation', () => {
    render(<App/>, { wrapper: MemoryRouter })

    fireEvent.click(screen.getByTestId('chat-link'))

    expect(screen.getByTestId('chat-container')).toBeInTheDocument()
  })

  it('renders appropriate content if go directly to URL', () => {
    window.history.pushState({}, 'Chat test', '/chat')
    render(<App/>, { wrapper: MemoryRouter })
    expect(screen.getByTestId('chat-container')).toBeInTheDocument()
  })
})
