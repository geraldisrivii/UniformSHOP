
<template>
    <button @click="() => this.$emit('update:isLoginDialogShow', !this.isLoginDialogShow)" class="user-login-button">
        <p class="user-login-button__title">{{text}}</p>
    </button>
</template>

<script>

export default {
    name: "my-user-login-button",
    props: {
        isLoginDialogShow: {
            type: Boolean,
        },
        text: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
.user-login-button {
    padding: 6px;
    border-radius: 10px;
    // height: 25px;
    // width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__title{
        text-decoration: underline;
        font-weight: 500;
    }
}

</style>