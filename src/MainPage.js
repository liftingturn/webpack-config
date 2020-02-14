import React, { Component } from 'react'
import './style.scss'
import LoginForm from './LoginForm'
import CountApp from './Components/CountApp'


 class MainPage extends Component {
    // constructor(props){
    //     super(props)
    //     this.checkValue = this.checkValue.bind(this)
    // }
    //  checkValue(values){ 
    //     console.log(values)}
     checkValue = (val) =>{
         alert(JSON.stringify(val))
     }   
    render() {
        
        return (
            <>
            <h3 className='title'>MainPage</h3>
            <CountApp></CountApp>
            <div className = 'container'>
                <LoginForm onSubmit = {this.checkValue}/>
            </div>
            </>
        )
    }
}
export default MainPage