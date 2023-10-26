
<template>
    <button @click="() => this.$emit('update:isRegisterDialogShow', !this.isRegisterDialogShow)" class="user-add-button">
        <img :src="userAddIconUrl" alt="my-user-add_icon">
    </button>
</template>

<script>

export default {
    name: "my-user-add-button",
    props: {
        isRegisterDialogShow: {
            type: Boolean,
        },
        userAddIconUrl: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
.user-add-button {
    padding: 4px;
    border-radius: 100%;
    background-color: rgb(236, 236, 236);
    // height: 25px;
    // width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>