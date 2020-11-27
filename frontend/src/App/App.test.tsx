import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders', () => {
    const { container } = render(<App/>);

    expect(container).toBeInTheDocument();
  })
})
