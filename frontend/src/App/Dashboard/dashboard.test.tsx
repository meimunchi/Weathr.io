import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react'
import Dashboard from './dashboard'

/*
describe('Dashboard', () => {
    afterEach(cleanup)

    it('renders correctly', () => {
        const { getByTestId } = render(<Dashboard />)
        expect(getByTestId('header-text')).toHaveTextContent('Weathr.io Chat is here to enlighten the soul')

    })


})

*/