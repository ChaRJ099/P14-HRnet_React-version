// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const title = screen.getByText("Create Employee");
//   expect(title).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import { RoutesPath } from '../src/Routes/RoutesPath'
import { BrowserRouter } from 'react-router-dom'

test('full app rendering/navigating', async () => {
  render(<RoutesPath />, { wrapper: BrowserRouter })
  const user = userEvent.setup()

  // verify page content for default route
  expect(screen.getByText(/you are home/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/about/i))
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})
