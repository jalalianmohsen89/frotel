import ApiService from "../plugins/axios.service";
import JwtService from "../plugins/jwt.service";

// action types
export const LOGIN = "login";
export const LOGOUT = "logout";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_ERROR = "setError";
const userData = 'user'

const state = {
    errors: null,
    user: !!localStorage.getItem(userData) ? JSON.parse(localStorage.getItem(userData)) : {},
    isAuthenticated: !!JwtService.getToken(),
    baseUrl: 'http://localhost/'
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

const actions = {
    [LOGIN](context, credentials) {
        return new Promise(resolve => {
            ApiService.post("/login", credentials)
                .then(({data}) => {
                    // console.log("Here what post returns", data);
                    context.commit(SET_AUTH, data);
                    resolve(data);
                })
                .catch(({response}) => {
                    context.commit(SET_ERROR, response.data.errors);
                });
        });
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        JwtService.saveToken(state.user.token);
        localStorage.setItem(userData, JSON.stringify(user));
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
        localStorage.removeItem(userData);
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
