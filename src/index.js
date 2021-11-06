import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'alertifyjs/build/css/alertify.min.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const globalState = {
  page: 'delivery',
  dropshipFee: '0',
  shipment: false,
  shipmentFee: '0',
  payment: false
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
  if(action.type==="CHANGE_PAGE_DELIVERY") {
    return {
      ...state,
      page: 'delivery'
    }
  }
  if(action.type==="ENABLE_DROPSHIP") {
    return {
      ...state,
      dropshipFee: '5,900'
    }
  }
  if(action.type==="DISABLE_DROPSHIP") {
    return {
      ...state,
      dropshipFee: '0'
    }
  }
  //Shipment
  if(action.type==="SHIPMENT_GOJEK") {
    return {
      ...state,
      shipment: 'GO SEND',
      shipmentFee: '15,000',
    }
  }
  if(action.type==="SHIPMENT_JNE") {
    return {
      ...state,
      shipment: 'JNE',
      shipmentFee: '9,000',
    }
  }
  if(action.type==="SHIPMENT_PERSONAL") {
    return {
      ...state,
      shipment: 'PERSONAL COURIER',
      shipmentFee: '29,000',
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
