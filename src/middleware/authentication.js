export default ({store, next}) => {
    // Your custom if statement
    if (store.getters.isAuthenticated) {
        next()
    } else
        next('/login')
}