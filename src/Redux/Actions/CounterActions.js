
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"

export const totalCountActionCreate = (type) =>{
    switch(type){
        case INCREMENT :
            return increment()
        case RESET:
            return reset()
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