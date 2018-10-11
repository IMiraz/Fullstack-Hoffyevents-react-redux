import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../../reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

export const  ConfigureStore = (preloadState) => {
    const middleWares =[];
    const middleWareEnhancer = applyMiddleware(...middleWares);
    
    const storeEnhancers = [middleWareEnhancer];

    const composedEnhancers= composeWithDevTools(...storeEnhancers);
    
    const store = createStore(
        rootReducer,
        preloadState,
        composedEnhancers
    )


    return store

}