import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice';
// import bonusReducer from './slices/accountSlice'; galti
import bonusReducer from './slices/bonusSlice';
import { Provider } from 'react-redux';
import rewardReducer from './reducers/reward';
import { adminApi } from './api/adminSlice';

const store = configureStore({
  reducer:{
    account : accountReducer,
    bonus : bonusReducer,
    reward : rewardReducer,
    [adminApi.reducerPath] : adminApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
