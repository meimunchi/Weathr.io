import React from 'react';
import { render, screen, getByTestId, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import BlogMain from './BlogMain/blog-main';

describe('All Blogs', () => {
    it('pages exist', () => {
        render(<BlogMain />, { wrapper: MemoryRouter })

        expect(screen.getByTestId('hurricane')).toBeInTheDocument()
        expect(screen.getByTestId('tornado')).toBeInTheDocument()
        expect(screen.getByTestId('earthquake')).toBeInTheDocument()
        expect(screen.getByTestId('blizzard')).toBeInTheDocument()
        expect(screen.getByTestId('flood')).toBeInTheDocument()
        expect(screen.getByTestId('wildfire')).toBeInTheDocument()
        expect(screen.getByTestId('about')).toBeInTheDocument()

    })

    it('can continue to read', () => {
        const { getByTestId } = render(<BlogMain />, { wrapper: MemoryRouter })
        fireEvent.click(getByTestId('hurricaneLink'))
        fireEvent.click(getByTestId('tornadoLink'))
        fireEvent.click(getByTestId('earthquakeLink'))
        fireEvent.click(getByTestId('blizzardLink'))
        fireEvent.click(getByTestId('wildfireLink'))

    })

});