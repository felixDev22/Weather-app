import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import App from '../App';
import Homepage from '../components/pages/Homepage';
import Details from '../components/pages/Details';

jest.mock('../components/pages/Homepage');
jest.mock('../components/pages/Details');

describe('Testing my App.js with pages', () => {
  test('should render the Header and Layout components', () => {
    Homepage.mockImplementation(() => <h1>WELCOME TO AFRICA</h1>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('WELCOME TO AFRICA');
    expect(txt).toBeInTheDocument();
  });

  test('should render the Homepage', () => {
    Homepage.mockImplementation(() => <h1>Hello From Home Page</h1>);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Home Page');
    expect(txt).toBeInTheDocument();
  });

  test('should render the Details Page', () => {
    Details.mockImplementation(() => <h1>Hello From Details Page</h1>);
    render(
      <MemoryRouter initialEntries={['/details']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const txt = screen.getByText('Hello From Details Page');
    expect(txt).toBeInTheDocument();
  });
});
