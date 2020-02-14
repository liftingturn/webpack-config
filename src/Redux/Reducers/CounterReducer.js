import update from "react-addons-update"
import {INCREMENT,RESET} from '../Actions/CounterActions'

const initState = {
    num : 0
}

export const clickNumber = (state=initState,action) =>{
    switch(action.type){

        case INCREMENT :
        return update(state,{
            num : {$set :state.num+1}
        })
        case RESET :
            return update(state,{
                num : {$set : 0}
            })
        default:return state
    }
}