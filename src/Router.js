import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import MainPage from './MainPage'
import Layout from './Layout'

export default class Rotuer extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/' component = {Layout}/>
            </Switch>
        )
    }
}
