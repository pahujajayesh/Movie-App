import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './Components/App';
import rootReducer from './reducers';

// const logger=function({}dispatch,getState){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE:', action.type);
//       next(action);
//     }
//   }
// }
const logger=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action !=='function'){
  console.log('ACTION_TYPE:', action.type);
  }
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action ==='function'){
//     action(dispatch);
//     return
//   }
//   next(action);
// };
const store=createStore(rootReducer,applyMiddleware(logger,thunk));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


