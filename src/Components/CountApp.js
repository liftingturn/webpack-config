import React from 'react'
import {connect} from 'react-redux'
import { arithAsync, increment } from '../Redux/Actions/CounterActions'

function CountApp(props) {
    const plusNumber = () =>{
        console.log('plus1')
        props.onclickDispatch()
    }
    return (
        <div>
            {/* store.getState().num들어갈것임*/}
        <h3> count num : {JSON.stringify(props.state.number.num)}</h3> 
            <button onClick={plusNumber}>+1</button>
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
    dispatch => ({onclickDispatch:()=>dispatch(increment())}) //인수로 전달된 state = redux store의 state
)(CountApp)