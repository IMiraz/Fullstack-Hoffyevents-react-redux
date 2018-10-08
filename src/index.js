import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root')

let  render = () => {
    ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>,rootElement);
}

if(module.hot) {
 module.hot.accept('./layout/App', () =>{
setTimeout(render)
 })
}

render()


serviceWorker.unregister();
