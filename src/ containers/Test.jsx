import React, { useReducer } from "react";

const reducer = (state, action)  =>{
    switch (action.type) {
        case "increment":
            return{
                ...state,
                counter : state.counter + 1
            }
        case "decrement" : 
            return{
                ...state, 
                counter : state.counter - 1
            }
        case "reset" : 
            return{
                ...state,
                counter : 0
            }
        default:
            return state
    }
}

const initialState = {
    counter : 0
}


const Test =() =>{
    const [state, dispatch] = useReducer(reducer, initialState )
    console.log(state)
    return(
        <div>
            <button onClick={() => dispatch({type : "increment"})}>Increment</button>
            <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
            <button onClick={() =>dispatch({type : "reset"})}>Reset</button>
            {
                state.counter
            }
        </div>
    )
}

export default Test;


