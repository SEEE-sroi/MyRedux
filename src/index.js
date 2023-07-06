import React from 'react';
import ReactDOM from 'react-dom/client';
 
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import ownReducer from "./ownSlice";
import CartUpdateReducer from './CartUpdateSlice';
import App from './App';
const store = configureStore({
    reducer :{
      own: ownReducer,
      CartUpdate: CartUpdateReducer,
    },
    });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
); 
reportWebVitals();
