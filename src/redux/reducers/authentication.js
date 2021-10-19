let user = {
    token: ''
}
let initialState = {};

if (sessionStorage.getItem('token') !== null) {
    user = {
        token: sessionStorage.getItem('token'),
    };
    initialState = {
        loggedIn: true,
        user
    }
}

export function authentication(state = initialState, action) {
    switch (action.type) {

        case "Login_Success":
            return {
                ...state,
                loggedIn: true,
                loading: false,
                user: action.user
            };
        case "Logout":
            return {
                ...state,
                loggedIn: false
            };

        default:
            return state;

    }
}