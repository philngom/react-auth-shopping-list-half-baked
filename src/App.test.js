import { render, screen } from '@testing-library/react';
import ListItemForm from './ListItemForm';

test('renders learn react link', async () => {
  render(<ListItemForm />);
  const linkElement = await screen.findByText(/name/i);
  expect(linkElement).toBeInTheDocument();
});
