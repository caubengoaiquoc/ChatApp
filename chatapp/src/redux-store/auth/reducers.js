import { LOGIN, LOGOUT } from "./actions";


const initialState = {
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: true
            };
        case LOGOUT:
            return { isLoggedIn: false };
        default:
            return state
    }
};

export default authReducer;
