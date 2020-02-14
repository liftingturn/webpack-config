import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Rotuer from './Router'
import {createStore, combineReducers,applyMiddleware} from 'redux'
import {Provider}from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import {clickNumber} from './Redux/Reducers/CounterReducer'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    form : formReducer ,
    number : clickNumber  //이 obj가 redux store의 구조가 됨. 
})
const logger = createLogger()
const store = createStore(rootReducer,applyMiddleware(logger,ReduxThunk))


export default function Root() {
    return (
        <Provider store = {store}>
        <BrowserRouter basename='/'>
          <Rotuer/>
        </BrowserRouter>
        </Provider>
    )
}
