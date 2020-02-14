
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"

export const arithAsync = () =>{
    return dispatch => {
        setTimeout(() => {
           dispatch(increment())
        }, 1000);
    }
}
export const totalCountActionCreate = (type) =>{
    switch(type){
        case INCREMENT :
            return increment()
        case RESET:
            return reset()
    }
}


export const increment = (data) => { 
   return {type : INCREMENT}
}

export const decrement = (data) => { 
    return {type : DECREMENT}
}

export const reset = () => {
    return {type : RESET}
}