import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'alertifyjs/build/css/alertify.min.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const globalState = {
  page: 'delivery'
}
//reducer
const rootReducer = (state = globalState, action) => {
  console.log(action)
  if(action.type==="CHANGE_PAGE_SHIPMENT") {
    return {
      ...state,
      page: 'shipment'
    }
  }
  if(action.type==="CHANGE_PAGE_SUMMARY") {
    return {
      ...state,
      page: 'summary'
    }
  }
  return state;
}

//store
const store = createStore(rootReducer);

//dispatching action

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
