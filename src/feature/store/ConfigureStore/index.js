import {createStore, applyMiddleware, compose} from 'redux'

export const  ConfigureStore = (preloadState) => {
    
    const middleWares =[];
    const middleWareEnhancer = applyMiddleware(..middleWares);
    
    const storeEnhancers = [middleWareEnhancer];

    const composedEnhancer= compose(...storeEnhancers);
    
    const store = createStore(
        rootReducer,
        preloadState,
        composedEnhancer

    )


    return store




}