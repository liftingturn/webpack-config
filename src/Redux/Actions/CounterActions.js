
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const totalCountActionCreate = (type) =>{  //어쨋든간 action obj를 return하는 action생성함수
    switch(type){
        case INCREMENT :
            return increment()
        case RESET:
            return reset()
        case INCREMENT_ASYNC:
            return arithAsync()
    }
}

export const arithAsync = () =>{
    return dispatch => {    
        setTimeout(() => {
           dispatch(increment())
        }, 1000);
    }

    // return increment()   실행문 던지는건 동작 함.

    // return  setTimeout(() => {
    //     increment()   
    //  }, 1000);   요렇게 하니 Actions must be plain objects.

   
}

export const increment = () => { 
   return {type : INCREMENT}
}

// export const decrement = () => { 
//     return {type : DECREMENT}
// }

export const reset = () => {
    return {type : RESET}
}