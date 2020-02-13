import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Rotuer from './Router'
import {createStore, combineReducers} from 'redux'
import {Provider}from 'react-redux'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    form : formReducer
})
const store = createStore(rootReducer)


export default function Root() {
    return (
        <Provider store = {store}>
        <BrowserRouter basename='/'>
          <Rotuer/>
        </BrowserRouter>
        </Provider>
    )
}
