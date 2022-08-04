let initialState = 
    {
        username: "",
    }

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                username: action.payload
            }
        case "CLEAR_USER":
            return {
                ...state,
                username: ""
            }
        default: 
            return state;
    }
}