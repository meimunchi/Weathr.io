import React from 'react';
import { screen, render } from '@testing-library/react';
import About from './about'

describe('About Us Page', () => {
    it('renders correctly', () => {
        render(<About />)
        screen.getByRole('img', { name: /tianrui li headshot/i })
        screen.getByRole('img', { name: /victoria mei headshot/i })
        screen.getByRole('img', { name: /antoine ferguson headshot/i })
        screen.getByRole('img', { name: /John Dillon Headshot/i })
        screen.getByRole('img', { name: /Colin Adams Headshot/i })

    })
})

