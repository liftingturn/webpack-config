import React from 'react'
import {connect} from 'react-redux'
import { totalCountActionCreate, reset} from '../Redux/Actions/CounterActions'
import {INCREMENT,RESET} from '../Redux/Actions/CounterActions'
import '../style.scss'

function CountApp(props) {
    const clickHandler = (e) =>{
        props.onclickDispatch(e.target.innerHTML)
    }
    return (
        <div className = 'countApp'>
        <h3> count num : {JSON.stringify(props.state.number.num)}</h3> 
            <button onClick={clickHandler} >{INCREMENT}</button>
            <button>+1 after 1sec</button>
            <button onClick={clickHandler}>{RESET}</button>
        </div>
    )
}

// const mapStateToProps = state =>{  //이 함수가 store의 state를 props와 매핑
//     return{

//     }
// }

//mapDispatchToProps : Reducer에 dispatch(action을 알리는 함수)를 props에 어떻게 엮을지

export default connect(
    state => ({state:state}),
    dispatch => ({onclickDispatch:(type)=>dispatch(totalCountActionCreate(type))}) //인수로 전달된 state = redux store의 state
)(CountApp)