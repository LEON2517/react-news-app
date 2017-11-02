import {createStore, compose, applyMiddleware} from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import callAPI from '../middlewares/callAPI'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk, randomId, callAPI))

const store = createStore(reducer,enhancer)
window.store = store

export default store
