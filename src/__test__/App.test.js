import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import App from '../App';
import Homepage from '../components/pages/Homepage';
import Details from '../components/pages/Details';

jest.mock('../components/pages/Homepage');
jest.mock('../components/pages/Details');

test('should render the Homepage', () => {
  Homepage.mockImplementation(() => <h2>Welcome From Home Page</h2>);
  render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );
  const txt = screen.getByText('Welcome From Home Page');
  expect(txt).toBeInTheDocument();
});

test('should render the Details Page', () => {
  Details.mockImplementation(() => <h2>Angola From Details Page</h2>);
  render(
    <MemoryRouter initialEntries={['/details/Angola']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );
  const txt = screen.getByText('Angola From Details Page');
  expect(txt).toBeInTheDocument();
});

describe('Test app.js with pages', () => {
  test('should render the Header and Layout components', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Weather App');
    expect(txt).toBeInTheDocument();
  });
});
