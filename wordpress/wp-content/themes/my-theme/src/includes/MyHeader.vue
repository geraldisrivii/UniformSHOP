<script>


export default {
    props: {
        isSearchShow: {
            type: Boolean,
            required: true
        },
        isBasketShow: {
            type: Boolean,
        },
        basketIconUrl: {
            type: String,
        },
        searchIconUrl: {
            type: String,
        },
        logoText: {
            type: String,
        },
        isRegisterDialogShow: {
            type: Boolean
        },
        isLoginDialogShow: {
            type: Boolean
        }
    },
    methods: {
    }
}
</script>

<template>
    <header>
        <div class="header-content container">

            <div class="header-right">
                <p class="header-right__title custom-title">
                    {{ logoText ? logoText : 'СПЕЦ. ОДЕЖДА' }}
                </p>
                <ul class="header-right-list">
                    <li class="header-right-list__item">
                        <router-link class="header-right-list__link" :to="'/'">Главная</router-link>
                    </li>
                    <li class="header-right-list__item">
                        <router-link class="header-right-list__link" :to="'/katalog'">Каталог</router-link>
                    </li>
                </ul>
            </div>
            <div class="header-left">
                <my-user-button v-if="$store.state.user.user != null" :userIconUrl="$store.state.app.header_profile_img"
                    :isProfileShow="$store.state.user.isProfileShow"
                    @update:isProfileShow="(newValue) => $store.commit('user/setIsProfileShow', newValue)" />
                <div v-else class="header-left-auth-box">
                    <my-user-add-button
                        @update:isRegisterDialogShow="(newValue) => $emit('update:isRegisterDialogShow', newValue)"
                        :isRegisterDialogShow="isRegisterDialogShow"
                        :userAddIconUrl="$store.state.app.header_profile_add_img" />
                    <div class="header-left-auth-box__separator"></div>
                    <my-user-login-button
                        @update:isLoginDialogShow="(newValue) => $emit('update:isLoginDialogShow', newValue)"
                        :isLoginDialogShow="isLoginDialogShow" :text="'Войти'" />
                </div>
                <my-basket-button :isBasketShow="isBasketShow"
                    @update:isBasketShow="(newValue) => $emit('update:isBasketShow', newValue)"
                    :basketIconUrl="basketIconUrl" />
                <!-- <my-search-button :isSearchShow="isSearchShow"
                    @update:isSearchShow="(newValue) => $emit('update:isSearchShow', newValue)"
                    :searchIconUrl="searchIconUrl" /> -->
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

.header-left-auth-box {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
    &__separator {
        height: 30px;
        width: 2px;
        background-color: lightgray;
    }
}

button {
    background-color: transparent;

}

header {
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0px 0px 50px 50px;


    @media (max-width: 768px) {
        width: 100%;
        left: 0;
        transform: none;
        border-radius: 0px 0px 15px 15px;
        padding: 10px 20px;

    }


    @media (min-width: 1550px) {
        width: 1250px;
    }

    margin: 0 auto;
    padding: 15px 50px;
    background-color: white;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 30px;

    &__basket {
        display: flex;
        align-items: center;
        gap: 5px;
    }
}

.header-right {
    display: flex;
    gap: 30px;
    align-items: center;

    &__title {
        color: #003D99;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }
}

.header-right-list {
    display: flex;
    gap: 15px;
    align-items: center;


    @media (max-width: 768px) {
        display: none;
    }

    &__item {}

    &__link {
        color: #000;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }
}


.custom-title {}


.header-left {
    &__basket {}
}

.basket {}

.basket-round {
    &__text {}
}
</style>