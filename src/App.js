import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux"
import { store } from './redux/configure-store';
import Counter from './containers/counter-container';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Provider store={store}>
          <Counter />
        </Provider>
      </header>
    </div >
  );
}

export default App;
