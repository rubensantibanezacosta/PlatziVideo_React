const reducer = (state, action)=>{
    switch(action.type){
        case "SET_FAVOURITE":
            return{
                ...state,
                mylist:[...state.mylist, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;