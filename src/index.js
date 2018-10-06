import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root')

let  render = () => {
    ReactDOM.render(<App />,rootElement);
}

if(module.hot) {
 module.hot.accept('./App', () =>{
setTimeout(render)
 })
}

render()


serviceWorker.unregister();
