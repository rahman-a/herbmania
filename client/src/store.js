import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    
})

const initState = {}

const middleWare = [thunk]

const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store