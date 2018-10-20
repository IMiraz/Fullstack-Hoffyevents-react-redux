import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './index.css';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import {ConfigureStore}  from '../src/store/ConfigureStore'
import ScrollToTop from '../src/common/util/ScrollToTop'

const store= ConfigureStore();

const rootElement = document.getElementById('root')

let  render = () => {
    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
          />
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

store.firebaseAuthIsReady.then(() => {

  render()
})



serviceWorker.unregister();
