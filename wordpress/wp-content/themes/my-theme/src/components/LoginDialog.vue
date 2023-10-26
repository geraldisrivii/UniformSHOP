<template>
    <modal-window class="register-dialog" :isDialogShow="isDialogShow" @update:isDialogShow="(newValue) => $emit('update:isDialogShow', newValue)">
        <p class="register-dialog__title">вход</p>
        <form @submit.prevent="loginUser" class="register-dialog-form">
            <input :value="login" @input="(event) => $emit('update:login', event.target.value)" type="text" name="login" placeholder="Логин"
                class="register-dialog-form__login register-dialog-form__input input-text">
            <input :value="password" @input="(event) => $emit('update:password', event.target.value)" type="text" name="password" placeholder="Пароль"
                class="register-dialog-form__password register-dialog-form__input input-text">
            <button type="submit" class="button button_around">Отправить</button>
        </form>
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
        isDialogShow: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        async loginUser() {
            let responseLogin = await WP.post('login', {
                'login': this.login,
                'password': this.password
            }, {
                withCredentials: true
            })
            console.log(responseLogin.data)

            this.$store.commit('user/setUser', responseLogin.data.user ? responseLogin.data.user : this.$store.user.user)

            this.$emit('update:isDialogShow', false)
        },
    }
}
</script>

<style lang="scss" scoped></style>