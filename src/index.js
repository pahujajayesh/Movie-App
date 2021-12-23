import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './Components/App';
import rootReducer from './reducers';
import './index.css';

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
export const storeContext=createContext();
console.log('storeContext',storeContext);

class Provider extends React.Component{
  render(){
    const{store}=this.props;
    return ( 
    <storeContext.Provider value={store}>
      {this.props.children}
    </storeContext.Provider>
    )
  }
}
export function connect(callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const { store } = this.props;
        const state = store.getState();
        const dataToBeSentAsProps = callback(state);

        return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
      }
    }

    class ConnectedComponentWrapper extends React.Component {
      render() {
        return (
          <storeContext.Consumer>
            {(store) => {
              return <ConnectedComponent store={store} />;
            }}
          </storeContext.Consumer>
        );
      }
    }
    return ConnectedComponentWrapper;
  };
}
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App  />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);


