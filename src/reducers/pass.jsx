const initialState = " ";
 const giveThedata = (state=initialState,action) =>{
        if(action.type==='give'){
            return action.payload
        }
    return state
}

export default giveThedata