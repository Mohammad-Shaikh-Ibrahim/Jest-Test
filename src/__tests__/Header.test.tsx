import { render, screen } from '@testing-library/react';
import Header  from '../components/Header';

test('renders header with correct title', () => {
  render(<Header />);
  const heading = screen.getByText(/Jest Test/i);
  expect(heading).toBeInTheDocument();
});