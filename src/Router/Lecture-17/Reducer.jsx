import React from 'react'
export const xyz = { count: 0 }
// export const xyz = null;

function Reducer(state, action) {
// function Reducer(toggle, action) {

    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "resate":
            return xyz

        default:
            return state
    }

    // switch (action.type) {
    //     // case "toggle":
    //     //     return {toggle ? "true":"false"}
    //     case "toggle":
    //         return "True"
       
    //     default:
    //         return xyz
    // }

}

export default Reducer