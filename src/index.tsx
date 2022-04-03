import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "mobx-react";
import reportWebVitals from './reportWebVitals';
import mainStore from "./app/stores/mainStore";
import {ModalConstructor} from "./app/components/Modals/ModalConstructor";
import axios from "axios";

axios.defaults.baseURL = 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1';

ReactDOM.render(
  <React.StrictMode>
      <Provider {...mainStore}>
          <App />

          <ModalConstructor />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
