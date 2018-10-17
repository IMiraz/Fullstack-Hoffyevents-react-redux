import {createStore, applyMiddleware} from 'redux'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import rootReducer from '../../reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'  
import firebase from '../../config'


const rrfConfig = {
    userProfile:'users',
    attachAuthIsReady:true,
    useFirstoreForProfile:true
}


export const  ConfigureStore = (preloadState) => {
    const middleWares =[thunk.withExtraArgument({getFirebase, getFirestore})];
    const middleWareEnhancer = applyMiddleware(...middleWares);
    
    const storeEnhancers = [middleWareEnhancer];

    const composedEnhancers= composeWithDevTools(...storeEnhancers,
         reactReduxFirebase(firebase, rrfConfig),
         reduxFirestore(firebase)
         
         )

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