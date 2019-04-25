import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import ListSocieties from './containers/ListSocieties';

function App() {
  return (
    <Provider store={store}>
      <ListSocieties />
    </Provider>
  );
}

export default App;
