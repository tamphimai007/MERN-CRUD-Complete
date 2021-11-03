import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/index';

/* TEST */
import axios from 'axios';
import { toast } from 'react-toastify';
/* TEST */

// Router
import { BrowserRouter } from 'react-router-dom';


/* interceptors */
// axios.interceptors.request.use((request) => {
//   console.log('interceptors request', request);
//   return request;
// }, (error) => {
//   console.log('interceptors request err', error.response);
//   return Promise.reject(error)
// });

// axios.interceptors.response.use((response) => {
//   console.log('interceptors response', response);
//   return response;
// }, (error) => {
//   console.log('response err', error.response);
//   toast.error(error.response.data.msg)
//   return Promise.reject(error)
// });
/* interceptors */

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);