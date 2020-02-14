import React from 'react'
import {connect} from 'react-redux'
import {totalCountActionCreate,INCREMENT,RESET,INCREMENT_ASYNC} from '../Redux/Actions/CounterActions'
import '../style.scss'

function CountApp(props) {
    const clickHandler = (e) =>{
        props.onclickDispatch(e.target.innerHTML)
    }
    return (
        <div className = 'countApp'>
        <h3> count num : {JSON.stringify(props.state.number.num)}</h3> 
            <button onClick={clickHandler} >{INCREMENT}</button>
            <button onClick={clickHandler} >{INCREMENT_ASYNC}</button>
            <button onClick={clickHandler}>{RESET}</button>
        </div>
    )
}


const mapStateToProps = stateFromStore =>{  //이 함수가 store의 state를 props와 매핑
    return {state:stateFromStore} 
}
//mapDispatchToProps : Reducer에 dispatch(action을 알리는 함수)를 props에 어떻게 엮을지
const mapDispatchToProps = (dispatch) => {  // dispatch 는 reducer를 동작하게 맹글어줌. state변화는 reducer가 진행한다. 단지 전달자.
    return ({onclickDispatch:(type)=>dispatch(totalCountActionCreate(type))}) //디스패치 파라미터는 액션 or (액션생성자 return)
}

export default connect(
    mapStateToProps,
   mapDispatchToProps //인수로 전달된 state = redux store의 state
)(CountApp)