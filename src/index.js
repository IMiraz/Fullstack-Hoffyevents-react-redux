import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import {ConfigureStore}  from '../src/store/ConfigureStore'
import ScrollToTop from '../src/common/util/ScrollToTop'
import {loadEvents} from '../src/feature/event/eventActions/actionsCreator'

const store= ConfigureStore();
store.dispatch(loadEvents());
const rootElement = document.getElementById('root')

let  render = () => {
    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop>
        <App />
        </ScrollToTop>
      
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
