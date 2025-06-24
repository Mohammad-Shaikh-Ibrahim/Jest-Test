import { render, screen, fireEvent } from '@testing-library/react';
import  Counter  from '../components/Counter';

test('renders counter and increases on click', () => {
  render(<Counter />);
  
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');

  const button = screen.getByText('Increase');
  fireEvent.click(button);
  expect(count).toHaveTextContent('1');
});