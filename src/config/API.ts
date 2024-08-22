const API_URL = "http://localhost:8080"

export const API = {
    auth: {
        SIGNIN: `${API_URL}/auth/sign-in`,
        SIGNUP: `${API_URL}/auth/sign-up`,
        LOGOUT: `${API_URL}/auth/logout`
    },

    user:{
        GETUSER: `${API_URL}/user`,
    }
}