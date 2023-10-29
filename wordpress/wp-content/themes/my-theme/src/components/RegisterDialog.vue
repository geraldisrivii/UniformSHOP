<template>
    <modal-window class="register-dialog" :isDialogShow="isDialogShow"
        @update:isDialogShow="(newValue) => $emit('update:isDialogShow', newValue)">
        <div class="first-menu">
            <p class="register-dialog__title">регистрация</p>
            <form @submit.prevent="registerUser" class="register-dialog-form">
                <input :value="login" @input="(event) => $emit('update:login', event.target.value)" type="text" name="login"
                    placeholder="Логин" class="register-dialog-form__login register-dialog-form__input input-text">
                <input :value="password" @input="(event) => $emit('update:password', event.target.value)" type="text"
                    name="password" placeholder="Пароль"
                    class="register-dialog-form__password register-dialog-form__input input-text">
                <input :value="email" @input="(event) => $emit('update:email', event.target.value)" type="text" name="email"
                    placeholder="Электронная почта"
                    class="register-dialog-form__password register-dialog-form__input input-text">
                <button type="submit" class="button button_around">Отправить</button>
            </form>
        </div>
        <div class="second-menu">
            <p class="second-menu__title">Код потверждения был выслан на вашу почту.</p>
            <input v-model="code" type="text" name="code" placeholder="Код потверждения"
                class="register-dialog-form__password register-dialog-form__input input-text">
        </div>
    </modal-window>
</template>

<script>

import WP from '@/axiosWP';

export default {
    props: {
        login: {
            type: [String, null],
            required: true,
        },
        password: {
            type: [String, null],
            required: true,
        },
        email: {
            type: [String, null],
            required: true,
        },
        isDialogShow: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            code: '',
            isSentCode: false,
        }
    },
    methods: {
        async registerUser() {
            let responseRegister = await WP.post('register', {
                'login': this.login,
                'password': this.password,
                'email': this.email,
            }, {
                withCredentials: true
            })

            console.log(responseRegister)

            this.$store.commit('user/setUser', responseRegister.data.user ? responseRegister.data.user : this.$store.state.user.user)

            this.$emit('update:isDialogShow', false)
        },
    }
}
</script>

<style lang="scss" scoped>
.second-menu{
    display: flex;
    flex-direction: column;
    gap: 30px;
    &__title{
        font-weight: 100;
        font-size: 22px;
    }
}
</style>