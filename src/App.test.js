import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page after loader', async () => {
  render(<App />);
  const cta = await screen.findByText(/View My Services/i);
  expect(cta).toBeInTheDocument();
});
