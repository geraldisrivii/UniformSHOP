<template>
    <div class="code-dialog">
        <p class="code-dialog__title">Подверждение</p>
        <p class="code-dialog__description">Код потверждения был выслан на вашу почту.</p>
        <form class="code-dialog__form">
            <input :value="code" @input="(event) => $emit('update:code', event.target.value)" type="text" name="code"
                placeholder="Код потверждения" class="code-dialog__input input-text">
            <valid-label class="register-dialog__label" :isValidText="'Отлично!'" :isntValidText="isntValidCode"
                :isntValid="Boolean(isntValidCode)" :isValid="Boolean(!isntValidCode)" />
            <!-- <button type="submit" class="button button_around">Отправить</button> -->
        </form>
    </div>
</template>

<script>
export default {
    props: {
        codeDialogShow: {
            type: Boolean,
            required: true
        },
        code: {
            type: [String, null],
            required: true
        },
        isntValidCode: {
            type: Boolean,
            required: true
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.code-dialog {

    &__description {
        margin-bottom: 40px;
    }

    &__title {
        margin-bottom: 10px;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 700;
    }

    &__input {
        border: 2px solid lightgray;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
</style>