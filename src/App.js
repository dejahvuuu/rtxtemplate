import React from 'react';
import './index.css';

//import InboxScreen from '../src/views/InboxScreen/InboxScreen';
import { MainRouter } from './routers/MainRouter';

const STYLES_URL = process.env.REACT_APP_STYLES_URL;

function App() {
  // TODO replace default by variable
  import(`./${STYLES_URL}/default/styles.scss`);
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
