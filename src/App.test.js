import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
/*import { store } from './app/store';*/
import store from './lib/store-userlogin';
import App from './App';

it('renders form title text', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/sign_in.title/i)).toBeInTheDocument();
});
