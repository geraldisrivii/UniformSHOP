<template>
    <modal-window class="login-dialog" :isDialogShow="isDialogShow"
        @update:isDialogShow="(newValue) => $emit('update:isDialogShow', newValue)">
        <p class="login-dialog__title">вход</p>
        <form @submit.prevent="loginUser" class="login-dialog-form">
            <div class="login-dialog-form__field-box">
                <input :value="login" @input="(event) => $emit('update:login', event.target.value)" type="text" name="login"
                    placeholder="Логин" class="login-dialog-form__login login-dialog-form__input input-text">

                <valid-label class="login-dialog__label" :isValidText="'Отлично!'" :isntValidText="isntValidFields.login"
                    :isntValid="Boolean(isntValidFields.login)" :isValid="Boolean(validFields.login)" />
            </div>
            <div class="login-dialog-form__field-box">
                <input :value="password" @input="(event) => $emit('update:password', event.target.value)" type="text"
                    name="password" placeholder="Пароль"
                    class="login-dialog-form__password login-dialog-form__input input-text">
                <valid-label class="login-dialog__label" :isValidText="'Отлично!'" :isntValidText="isntValidFields.password"
                    :isntValid="Boolean(isntValidFields.password)" :isValid="Boolean(validFields.password)" />
            </div>
            <button :disabled="!isValidAllData" type="submit" class="button button_around">Отправить</button>
        </form>
    </modal-window>
    <state-dialog v-if="isShowWarningDialog" :isShowstateDialog="isShowWarningDialog"
        @update:isShowstateDialog="isShowWarningDialog = $event" :title="'Неверный пароль'" :text="'Попробуйте еще раз'" />
    <state-dialog :imageSrc="$store.state.app.settings_success_icon" v-if="isShowSuccessDialog"
        :isShowstateDialog="isShowSuccessDialog" @update:isShowstateDialog="isShowSuccessDialog = $event"
        :title="'Успешная авторизация'" :text="''" />
</template>

<script>

import WP from '@/axiosWP';
import Validator from '@/classes/Validator';
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
    watch: {
        login() {
            this.validData()
        },
        password() {
            this.validData()
        },
    },
    data() {
        return {
            validFields: {
                login: false,
                password: false,
            },
            isntValidFields: {
                login: false,
                password: false,
            },
            isValidAllData: false,
            isShowWarningDialog: false,
            isShowSuccessDialog: false
        }
    },
    methods: {
        async loginUser() {
            let responseLogin = await WP.post('/users/signin', {
                'login': this.login,
                'password': this.password
            }, {
                withCredentials: true
            })

            if (responseLogin.data.status == false) {
                this.isShowWarningDialog = true;
                setTimeout(() => { this.isShowWarningDialog = false }, 2000)
            } else {
                this.isShowSuccessDialog = true
                setTimeout(() => {
                    this.isShowSuccessDialog = false
                }, 2000)
                this.$store.commit('user/setUser', responseLogin.data.user ? responseLogin.data.user : this.$store.user.user)
            }
            this.$emit('update:isDialogShow', false)

        },
        async validData() {
            let validator = new Validator();
            let rules = [
                {
                    name: 'password', rules: [
                        { type: 'min', value: 6, message: 'Пароль должен быть хотя-бы 6 символов' },
                        { type: 'max', value: 15, message: 'Пароль должен быть не более 15 символов' },
                        { regexp: '/[0-9]+/i', message: 'Пароль должен содержать хотя-бы одну цифру' },
                    ]
                },
                {
                    name: 'login', rules: [
                        { type: 'min', value: 6, message: 'Логин должен быть хотя-бы 6 символов' },
                        { type: 'max', value: 15, message: 'Логин должен быть не более 15 символов' },
                        {
                            type: 'custom', callback: async (login) => {
                                let response = await WP.get('/users/check_by_field', {
                                    params: {
                                        field: 'login',
                                        value: login
                                    }
                                }, { withCredentials: true })
                                return !response.data.status
                            }, params: ['hello'], message: 'Такого логина не существует'
                        },
                    ]
                },
            ]
            validator.setRules(rules)


            let fields = {
                password: this.password,
                login: this.login,
            }
            let validFields = await validator.run(fields)

            this.validFields = validFields

            if (validator.isAllFieldsValid()) {
                return this.isValidAllData = true
            } else {
                this.isValidAllData = false
            }

            let isntValidFields = validator.getIsntValidFields()

            this.isntValidFields = isntValidFields;
        },
    }
}
</script>

<style lang="scss" scoped>
.login-dialog {

    &__title {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 700;
    }

    &__label {
        margin-left: 10px;
    }
}

.login-dialog-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;

    &__login {}

    &__field-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__label {
        margin-left: 10px;

        &_success {
            color: green;
        }

        &_danger {
            color: red;
        }
    }

    &__password {}

    &__input {
        border: 2px solid lightgray;
    }
}
</style>