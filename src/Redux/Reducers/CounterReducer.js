import update from "react-addons-update"
import {INCREMENT} from '../Actions/CounterActions'

const initState = {
    num : 0
}

export const clickNumber = (state=initState,action) =>{
    switch(action.type){
        case INCREMENT :
        console.log('clickNumber in reducer run')
        return update(state,{
            num : {$set :state.num+1}
        }
        
        )
        default:return state
    }
}