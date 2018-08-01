import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise'

const store = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
<Provider store={store(reducers)}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
