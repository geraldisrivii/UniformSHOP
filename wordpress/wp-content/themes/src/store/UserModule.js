export const UserModule = {
    state: () => ( {
        user: null,
        isProfileShow: false
    }),
    getters: {
        userIsntNull(state){
            return state.user != null
        }
    },
    mutations: {
        setUser(state, user){
            state.user = user;
            console.log(user);
        },
        setIsProfileShow(state, isProfileShow){
            state.isProfileShow = isProfileShow;
        },
    },
    actions: {

    },
    namespaced: true
}
