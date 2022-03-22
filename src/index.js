import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';*/
import App from './App';
/* Counter store
import { store } from './app/store';
*/
/* Tasklist store  */
// import store from './lib/store-tasklist';
import store from './lib/store-userlogin';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './services/i18n';
import Preloader from './components/Preloader';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Preloader bgColor='#fff' />}>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
