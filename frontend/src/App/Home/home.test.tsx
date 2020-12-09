import React from 'react';
import { render } from '@testing-library/react';
import Home from './home'

describe('Home component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('intro-header')).toHaveTextContent('Staying connected in all weather');
    expect(getByTestId('intro')).toHaveTextContent('Text us to receive real-time updates on storms and tips to keep safe');


  })
});
