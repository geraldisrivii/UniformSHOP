<template>
    <div :class="{'quantity-buttons-without-border': !border}" class="quantity-buttons">
        <button class="quantity-buttons_button" :disabled="count === 0"
            @click="$emit('update:count', count - 1)">
            <img :src="$store.state.app.settings_paginate_button_left" alt="quantity_button_left">
        </button>
        <div class="quantity-buttons-around">
            <p class="quantity-buttons-around__current">{{ count }}</p>
        </div>
        <button class="quantity-buttons_button" :disabled="maxQuanity <= count"
            @click="$emit('update:count', count + 1)">
            <img :src="$store.state.app.settings_paginate_button_right" alt="quantity_button_right">
        </button>
    </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            required: true
        },
        maxQuanity: {
            type: Number,
            required: true
        },
        border: {
            type: Boolean,
            default: true,
        }
    },
}
</script>

<style lang="scss" scoped>
.quantity-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 60px;
    border-radius: 100px;
    background-color: rgb(245, 245, 245);
    width: max-content;
    &_button {}
}

.quantity-buttons-around {
    background-color: #003D99;
    border: 2px solid lightgray;
    border-radius: 100%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__current {
        font-size: 24px;
        font-weight: 500;
        color: white;
    }
}

.quantity-buttons-without-border{
    padding: 0px;
    background-color: transparent;
}
</style>