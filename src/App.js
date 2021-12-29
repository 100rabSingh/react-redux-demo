import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import CandyContainer from './components/CandyContainer';
import DonutContainer from './components/DonutContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <CandyContainer />
        <DonutContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
