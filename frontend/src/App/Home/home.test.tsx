import React from 'react';
import { render } from '@testing-library/react';
import Home from './home'

describe('Home component', () => {
<<<<<<< HEAD
  it ('renders appropriate content', () => {
    const { getByTestId } = render(<Home/>);
=======
  it('renders correctly', () => {
    const { getByTestId } = render(<Home />);
>>>>>>> df7ccd8... added chatbox styling

    expect(getByTestId('intro-header')).toHaveTextContent('Staying connected in all weather');
  })
});
