import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

test('should render component button', () => {
  const { container } = render(<Button />);
  expect(container).toBeInTheDocument();
});
