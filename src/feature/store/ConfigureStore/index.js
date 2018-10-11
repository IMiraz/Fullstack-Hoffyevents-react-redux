import {createStore, applyMiddleware, compose} from 'redux'
export const  ConfigureStore = (preloadState) => {
    const middleWares =[];
    const middleWareEnhancer = applyMiddleware(..middleWares);
    
    const storeEnhancers = [middleWareEnhancer];

    const composedEnhancers= compose(...storeEnhancers);
    
    const store = createStore(
        rootReducer,
        preloadState,
        composedEnhancers
    )


    return store




}