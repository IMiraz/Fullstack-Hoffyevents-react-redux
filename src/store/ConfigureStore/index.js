import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../../reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const  ConfigureStore = (preloadState) => {
    const middleWares =[thunk];
    const middleWareEnhancer = applyMiddleware(...middleWares);
    
    const storeEnhancers = [middleWareEnhancer];

    const composedEnhancers= composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadState,
        composedEnhancers
    )
    if(process.env.NODE_ENV !=='production')
    {
        if(module.hot) {
              module.hot.accept('../../reducers/rootReducer',() =>{
                   const newRootReducer= require('../../reducers/rootReducer').default;
                   store.replaceReducer(newRootReducer)
              })
        }



    }


    return store

}