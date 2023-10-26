\<template>
    <button @click="() => this.$emit('update:isBasketShow', !this.isBasketShow)" class="header-left__basket basket">
        <img :src="basketIconUrl" alt="basket_icon">
        <div class="basket-round">
            <p class="basket-round__text">
                {{ $store.getters['basket/countBasket'] }}
            </p>
        </div>
    </button>
</template>

<script>

export default {
    name: "my-basket-button",
    props: {
        isBasketShow: {
            type: Boolean,
        },
        basketIconUrl: {
            type: String,
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.basket {}

.basket-round {
    border-radius: 100%;
    border: 1px solid lightgray;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__text {
        font-weight: 500;
    }
}
</style>