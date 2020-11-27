import React from 'react';
import { render } from '@testing-library/react';
import Home from './home'

describe('Home component', () => {
  it ('renders correctly', () => {
    const { getByTestId } = render(<Home/>);

    expect(getByTestId('intro-header')).toHaveTextContent('Staying connected in all weather');
  })
});
