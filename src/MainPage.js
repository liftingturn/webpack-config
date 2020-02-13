import React from 'react'
import './style.scss'
import LoginForm from './LoginForm'

export default function MainPage() {

    const checkValue = values => { 
        console.log(values)
    }

    return (
        <>
        <h3 className='title'>root component!</h3>
        <div className = 'container'>
            <LoginForm onSubmit = {checkValue}/>
        </div>
        </>
    )
}
