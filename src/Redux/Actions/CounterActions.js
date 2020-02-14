
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const arithAsync = () =>{
    return dispatch => {
        setTimeout(() => {
           dispatch(increment())
        }, 1000);
    }
}

export const increment = (data) => { 
   return {type : INCREMENT}
}

export const decrement = (data) => { 
    return {type : DECREMENT}
}