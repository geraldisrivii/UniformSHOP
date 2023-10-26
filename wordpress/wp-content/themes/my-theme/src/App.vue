<template>
    <!-- <right-dialog v-if="isBasketShow" v-model:isRightDialogShow="isBasketShow"/> -->
    <Profile @update:isProfileShow="(newValue) => $store.commit('user/setIsProfileShow', newValue)"
        :isProfileShow="isProfileShow" />
    <Transition @before-enter="beforeEnter" name="basket">
        <Basket v-if="isBasketShow" v-model:isBasketShow="isBasketShow" />
    </Transition>
    <RegisterDialog v-model:password="userRegister.password" v-model:login="userRegister.login"
        v-model:isDialogShow="isRegisterDialogShow" />
    <LoginDialog v-model:password="userLogin.password" v-model:login="userLogin.login"
        v-model:isDialogShow="isLoginDialogShow" />

    <MyHeader v-model:isRegisterDialogShow="isRegisterDialogShow" v-model:isLoginDialogShow="isLoginDialogShow"
        v-if="isAllDataLoaded" v-model:isSearchShow="isSearchShow" v-model:isBasketShow="isBasketShow"
        :basketIconUrl="$store.state.app.header_basket_img" :searchIconUrl="$store.state.app.header_search_img"
        :logoText="$store.state.app.header_logo">
    </MyHeader>
    <router-view :isAppLoaded="isAppLoaded" :isDataLoaded="isDataLoaded"
        @update:isDataLoaded="updateIsDataLoaded"></router-view>
    <MyFooter v-if="isAllDataLoaded" />
    
    <div ref="preloader" class="preloader">

    </div>
</template>
<script>
import MyHeader from './includes/MyHeader.vue'
import SnippingDialog from '@/components/SnippingDialog.vue';
import WP from '@/axiosWP';
import WOO from '@/axiosWoocomerce';
import MyFooter from './includes/MyFooter.vue';
import RegisterDialog from './components/RegisterDialog.vue';
import LoginDialog from './components/LoginDialog.vue';
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';
import Basket from './components/Basket.vue';
import Profile from './components/Profile.vue';

export default {

    data() {
        return {
            isSearchShow: false,
            isBasketShow: false,
            isDataLoaded: false,
            isAppLoaded: false,
            isSinippingDialogShow: true,
            AppData: {},
            data: {},
            isRegisterDialogShow: false,
            isLoginDialogShow: false,
            userRegister: {
                login: null,
                password: null,
            },
            userLogin: {
                login: null,
                password: null,
            },
        }
    },
    components: {
        MyHeader,
        MyFooter,
        RegisterDialog,
        LoginDialog,
        Basket,
        Profile,
        SnippingDialog
    },
    methods: {
        updateIsDataLoaded(newValue) {
            this.isDataLoaded = newValue
        },
        disablePreloader() {
            this.$refs.preloader.style.opacity = 0;

            setTimeout(() => {
                this.$refs.preloader.style.display = 'none'
            }, 1000)
        },

        ...mapMutations({
            'setUser': 'user/setUser',
            'setBasketItems': 'basket/setBasketElements'
        }),
        beforeEnter(el) {
            el.style.zIndex = '999'
        }
    },
    computed: {
        isAllDataLoaded() {
            if (this.isDataLoaded && this.isAppLoaded) {
                this.disablePreloader();
            }
            return this.isDataLoaded && this.isAppLoaded
        },
        ...mapState({
            user: (state) => state.user.user,
            isProfileShow: (state) => state.user.isProfileShow,
            // basketItems: (state) => state.basket.elements,
        }),
        ...mapGetters({
            'countBasket': 'basket/countBasket',
            'basketItems': 'basket/basketItems'
        })
    },
    watch: {
        basketItems: {
            handler() {
                console.log('edit')
                localStorage.setItem('basketItems', JSON.stringify(this.basketItems))
            },
            deep: true
        },
        isBasketShow(){
            if(this.isBasketShow == true){
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.overflowY = 'scroll'
            }
        },
        isProfileShow(){
            if(this.isProfileShow == true){
                document.body.style.overflowY = 'hidden'
            } else {
                document.body.style.overflowY = 'scroll'
            }
        }
    },
    async beforeCreate() {
        let AppData = await WP.get('settings').then(response => response.data);

        this.$store.commit('setApp', AppData.cfs);

        let response = await WP.get('getToken', {
            withCredentials: true
        })

        let userData = await WP.get('getUserData', {
            withCredentials: true
        }).then(response => response.data);

        this.setUser(userData != false ? userData : null)

        this.isAppLoaded = true;
    },
    mounted() {
        let basketItemsLocalStorage = localStorage.getItem('basketItems')
        this.setBasketItems(basketItemsLocalStorage != null && basketItemsLocalStorage != 'undefined' ? JSON.parse(basketItemsLocalStorage) : [])
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

@import './variables.scss';


.basket-enter-active,
.basket-leave-active {
    transition: all 0.5s ease;
}

.basket-enter-from,
.basket-leave-to {
    transform: translateX(200px);
    // width: 0px;
    opacity: 0;
}

.snipping-dialog-enter-active,
.snipping-dialog-leave-active {
    transition: all 0.5s ease;
}

.snipping-dialog-enter-from
.snipping-dialog-leave-to {
    transform: translateX(200px);
    // width: 0px;
    opacity: 0;
}



.close-button {
    position: fixed;
    top: 50px;
    right: 80px;
    height: 40px;
    width: 40px;

    &__line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 40px;
        width: 2px;
        background-color: white;
        border-radius: 2px;

        &_1 {
            transform: rotate(45deg);
        }

        &_2 {
            transform: rotate(-45deg);
        }
    }
}

.preloader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #002153;
    transition: all 0.6s;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;

    @media (max-width: 768px) {
        font-size: 50%;
    }
}

body {
    font-family: Montserrat;
    font-size: 18px;
    background-color: $background-color;
    overflow-x: hidden;
}

button {
    border: none;
    font-size: 16px;
    font-family: Montserrat;
    cursor: pointer;
    background-color: transparent;
}

ul {
    list-style: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
        padding: 0 20px;

    }
}

a {
    text-decoration: none;
}

input {
    border: none;
    outline: none;

    &:focus {
        outline: none;
    }
}

.button {
    padding: 17px 30px;
    text-align: center;
    min-width: 200px;
    background-color: $primary-color;
    color: white;
    // text
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
        background-color: darken($primary-color, 10%);
    }

    &:disabled {
        opacity: 0.7;
        cursor: auto;

        &:hover {
            background-color: $primary-color;
        }
    }

    &_around {
        border-radius: 100px;
    }

    &_gray {
        background-color: lightgray;
        color: black;

        &:hover {
            background-color: lighten(lightgray, 10%);
        }

        &:disabled {
            opacity: 0.7;

            &:hover {
                background-color: lightgray;
            }
        }
    }
}

.line {
    height: 3px;
    width: 50px;
    background-color: $primary-color;
}

.nice-select {
    border-radius: 100px;
    padding: 16px 40px;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    height: auto;
}

.spesials-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.input-text {
    border-radius: 100px;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: auto;
    padding: 17px 30px;
    background-color: white;

    &::placeholder {
        text-transform: uppercase;
    }
}

.text-area {
    border-radius: 10px;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: auto;
    padding: 17px 30px;
    background-color: white;
    min-height: 200px;
    outline: none;

    &:focus {
        outline: none;
    }

    border: 2px solid lightgray;
}


.register-dialog {

    &__title {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 700;
    }
}

.register-dialog-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;

    &__login {}

    &__password {}

    &__input {
        border: 2px solid lightgray;
    }
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>