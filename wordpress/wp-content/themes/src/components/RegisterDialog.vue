<template>
    <modal-window class="register-dialog" :isDialogShow="isDialogShow"
        @update:isDialogShow="(newValue) => $emit('update:isDialogShow', newValue)">
        <div v-if="isSentCode == false" class="first-menu">
            <p class="register-dialog__title">регистрация</p>
            <form @submit.prevent="registerUser" class="register-dialog-form">
                <div class="register-dialog-form__field-box">
                    <input :value="login" @input="(event) => $emit('update:login', event.target.value)" type="text"
                        name="login" placeholder="Логин"
                        class="register-dialog-form__login register-dialog-form__input input-text">
                    <valid-label class="register-dialog__label" :isValidText="'Отлично!'"
                        :isntValidText="isntValidFields.login" :isntValid="Boolean(isntValidFields.login)"
                        :isValid="Boolean(validFields.login)" />

                </div>
                <div class="register-dialog-form__field-box">
                    <input :value="password" @input="(event) => $emit('update:password', event.target.value)" type="text"
                        name="password" placeholder="Пароль"
                        class="register-dialog-form__password register-dialog-form__input input-text">
                    <valid-label class="register-dialog__label" :isValidText="'Отлично!'"
                        :isntValidText="isntValidFields.password" :isntValid="Boolean(isntValidFields.password)"
                        :isValid="Boolean(validFields.password)" />
                </div>
                <div class="register-dialog-form__field-box">
                    <input :value="email" @input="(event) => $emit('update:email', event.target.value)" type="text"
                        name="email" placeholder="Электронная почта"
                        class="register-dialog-form__password register-dialog-form__input input-text">
                    <valid-label class="register-dialog__label" :isValidText="'Отлично!'"
                        :isntValidText="isntValidFields.email" :isntValid="Boolean(isntValidFields.email)"
                        :isValid="Boolean(validFields.email)" />
                </div>
                <button :disabled="!isValidAllData" type="submit" class="button button_around">Отправить</button>
            </form>
        </div>
        <CodeDialog v-model:isntValidCode="isntValidCode" v-else-if="codeDialogShow" v-model:codeDialogShow="codeDialogShow"
            v-model:code="code" />
        <StateDialog :isShowstateDialog="isShowSuccessDialog" :imageSrc="$store.state.app.settings_success_icon"
            :title="'Вы успешно зарегистрировались'" :text="'Спасибо за регистрацию!'" />
        <StateDialog :isShowstateDialog="isShowWarningDialog" :title="'Ошибка сервера'"
            :text="'Попробуйте через несколько часов'" />
        <Transition name="preloader">
            <div v-if="isPreloaderEnabled" class="pleloader-box">
                <img class="pleloader-box__image" :src="$store.state.app.settings_preloader_icon" alt="preloader-icon">
            </div>
        </Transition>
    </modal-window>
</template>

<script>

import WP from '@/axiosWP';
import Validator from '@/classes/Validator';
import CodeDialog from './CodeDialog.vue';
import StateDialog from './UI/StateDialog.vue';

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
            code: "",
            isSentCode: false,
            isValidAllData: false,
            isValidCode: false,
            isntValidCode: true,
            codeDialogShow: false,
            validFields: {
                login: false,
                password: false,
                email: false,
            },
            isntValidFields: {
                login: false,
                password: false,
                email: false,
            },
            isPreloaderEnabled: false,
            isShowSuccessDialog: false,
            isShowWarningDialog: false,
        };
    },
    watch: {
        async login() {
            await this.validData();
        },
        async password() {
            await this.validData();
        },
        async email() {
            await this.validData();
        },
        async code() {
            await this.validCode();
        }
    },
    methods: {
        async validCode() {
            let validator = new Validator();
            let rules = [
                {
                    name: "code",
                    rules: [
                        { type: "min", value: 4, message: "Код должен быть хотя-бы 4 символа" },
                        { type: "max", value: 4, message: "Код не может быть больше 4 символов" },
                        {
                            type: "custom",
                            callback: async (code) => {
                                let response = await WP.post("/mails/check", {
                                    code: code
                                }, { withCredentials: true });
                                return response.data.status;
                            },
                            params: ["hello"],
                            message: "Неверный код"
                        },
                    ]
                },
            ];
            validator.setRules(rules);
            let fields = {
                code: this.code
            };
            let validFields = await validator.run(fields);

            this.isValidCode = validFields.code;

            this.isntValidCode = (validator.getIsntValidFields()).code;

            if (this.isValidCode) {
                this.codeDialogShow = false;

                this.isShowSuccessDialog = true;

                let userData = await WP.get('/users/current', {
                    withCredentials: true
                }).then(response => response.data);

                this.$store.commit('user/setUser', userData != false ? userData : null)

                setTimeout(() => {
                    this.isShowSuccessDialog = false;
                }, 2000);
            }
        },
        async validData() {
            let validator = new Validator();
            let rules = [
                {
                    name: "password",
                    rules: [
                        { type: "min", value: 6, message: "Пароль должен быть хотя-бы 6 символов" },
                        { type: "max", value: 15, message: "Пароль должен быть не более 15 символов" },
                        { regexp: "/[0-9]+/i", message: "Пароль должен содержать хотя-бы одну цифру" },
                    ]
                },
                {
                    name: "login",
                    rules: [
                        { type: "min", value: 6, message: "Логин должен быть хотя-бы 6 символов" },
                        { type: "max", value: 15, message: "Логин должен быть не более 15 символов" },
                        {
                            type: "custom",
                            callback: async (login) => {
                                let response = await WP.get("/users/check_by_field", {
                                    params: {
                                        field: "login",
                                        value: login
                                    },
                                    withCredentials: true
                                });
                                return response.data.status;
                            },
                            params: ["hello"],
                            message: "Такой логин уже используется"
                        },
                    ]
                },
                {
                    name: "email",
                    rules: [
                        { regexp: "/^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$/i", message: "Не валидный вариант электронной почтоы" },
                        {
                            type: "custom",
                            callback: async (email) => {
                                let response = await WP.get("/users/check_by_field", {
                                    params: {
                                        field: "email",
                                        value: email
                                    },
                                    withCredentials: true
                                });
                                return response.data.status;
                            },
                            params: ["hello"],
                            message: "Такая почта уже используется"
                        },
                    ]
                },
            ];
            validator.setRules(rules);
            let fields = {
                password: this.password,
                login: this.login,
                email: this.email,
            };
            let validFields = await validator.run(fields);
            this.validFields = validFields;
            if (validator.isAllFieldsValid()) {
                return this.isValidAllData = true;
            }
            else {
                this.isValidAllData = false;
            }
            let isntValidFields = validator.getIsntValidFields();
            this.isntValidFields = isntValidFields;
        },
        async registerUser() {
            let responseRegister = await WP.post("/users/signup", {
                "login": this.login,
                "password": this.password,
                "email": this.email,
            }, {
                withCredentials: true
            });
            this.$store.commit("user/setUser", responseRegister.data.user ? responseRegister.data.user : this.$store.state.user.user);
            this.isPreloaderEnabled = true;
            let response = await WP.post("/mails", {}, {
                withCredentials: true
            }).then(response => response.data);
            this.isSentCode = true;
            this.isPreloaderEnabled = false;

            this.codeDialogShow = true
        },
        async CheckCode() {
            let response = await WP.post("/mails/check", {
                "code": this.code
            }, {
                withCredentials: true
            }).then(response => response.data);
            this.$emit("update:isDialogShow", false);
        }
    },
    mounted() {
        this.validData();
    },
    components: { CodeDialog, StateDialog }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.pleloader-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $accent-color;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__image {
        width: 100px;
        height: 100px;
    }
}

.preloader-enter-active,
.preloader-leave-active {
    transition: opacity 0.5s ease;
}

.preloader-enter-from,
.preloader-leave-to {
    opacity: 0;
}

.label-enter-active,
.label-leave-active {
    transition: all 0.5s ease;
}

.label-enter-from,
.label-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.register-dialog {

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

.register-dialog-form {
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