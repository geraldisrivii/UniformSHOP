<template>
    <modal-window class="register-dialog" :isDialogShow="isDialogShow" @update:isDialogShow="(newValue) => $emit('update:isDialogShow', newValue)">
        <p class="register-dialog__title">регистрация</p>
        <form @submit.prevent="registerUser" class="register-dialog-form">
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
        async registerUser() {
            let responseRegister = await WP.post('register', {
                'login': this.login,
                'password': this.password
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

<style lang="scss" scoped></style>