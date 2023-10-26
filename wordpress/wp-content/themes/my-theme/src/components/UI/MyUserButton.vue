
<template>
    <button @click="() => this.$emit('update:isProfileShow', !this.isProfileShow)" class="user-button">
        <img :src="userIconUrl" alt="my-user_icon">
        <!-- <div class="my-user-round">
            <p class="my-user__text">
                {{ $store.getters['basket/countBasket'] }}
            </p>
        </div> -->
    </button>
</template>

<script>

export default {
    name: "my-user-button",
    props: {
        isProfileShow: {
            type: Boolean,
        },
        userIconUrl: {
            type: String,
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.user-button {
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