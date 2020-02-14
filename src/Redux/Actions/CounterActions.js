
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const totalCountActionCreate = (type) =>{
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
}

export const increment = () => { 
   return {type : INCREMENT}
}

export const decrement = () => { 
    return {type : DECREMENT}
}

export const reset = () => {
    return {type : RESET}
}