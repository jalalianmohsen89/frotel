export default ({store, next}) => {
    // Your custom if statement
    if (store.getters.isAuthenticated) {
        const user = store.getters.currentUser
        console.log(user.role)
        if (user.role === 'admin') {
            next()
        } else {
            next('/')
            return false
        }
    }
    next('/login')
}