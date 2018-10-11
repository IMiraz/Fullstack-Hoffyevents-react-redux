import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import {ConfigureStore}  from '../src/store/ConfigureStore'


const store= ConfigureStore();

const rootElement = document.getElementById('root')

let  render = () => {
    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
       <App />
      </BrowserRouter>
        </Provider>
,rootElement);
}

if(module.hot) {
 module.hot.accept('./layout/App', () =>{
setTimeout(render)
 })
}

render()


serviceWorker.unregister();
