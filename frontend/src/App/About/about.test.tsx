import React from 'react';
import { screen, getByTestId, render } from '@testing-library/react';
import About from './about'

describe('About Us Page', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<About />);
        screen.getByAltText(/tianrui li headshot/i)
        screen.getByRole('img', {
            name: /victoria mei headshot/i
        })

    })
})