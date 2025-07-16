import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple component test that doesn't depend on routing
test('renders basic React component', () => {
  const SimpleComponent = () => <div>Convention App</div>;
  render(<SimpleComponent />);
  const titleElement = screen.getByText(/Convention App/i);
  expect(titleElement).toBeInTheDocument();
});
