const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FAVOURITE":
            const exist = state.mylist.find(item => item.id === action.payload.id)
            if (exist) return { ...state }
            return {
                ...state,
                mylist: [...state.mylist, action.payload]
            }
        case "DELETE_FAVOURITE":
            return {
                ...state,
                mylist: state.mylist.filter(items => items.id !== action.payload)
            }
        case "LOGIN_REQUEST":
            return {
                ...state,
                user:action.payload,
            }
            case "LOGOUT_REQUEST":
            return {
                ...state,
                user:action.payload,
            }
            case "REGISTER_REQUEST":
            return {
                ...state,
                user:action.payload,
            }
            case "GET_VIDEO_SOURCE":
            return {
                ...state,
                playing:state.trends.find(item => item.id === parseInt(action.payload)) || state.originals.find(item => item.id === parseInt(action.payload)) || [],
            }
        default:
            return state;
    }
}

export default reducer;