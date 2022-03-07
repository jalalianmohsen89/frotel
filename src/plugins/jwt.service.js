const token = 'token'

const jwtService = {
    getToken() {
        return localStorage.getItem(token);
    },

    saveToken(tokenCode) {
        localStorage.setItem(token, tokenCode)
    },

    destroyToken() {
        localStorage.removeItem(token)
    },

}

export default jwtService;