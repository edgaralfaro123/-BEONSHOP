import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './store/store'
import Home from './containers/Home';


function App() {

  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
