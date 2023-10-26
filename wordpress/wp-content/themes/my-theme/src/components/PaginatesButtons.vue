<template>
    <div class="paginate-buttons">
        <button class="paginate-buttons_button" :disabled="currentPage === 1"
            @click="$emit('update:currentPage', currentPage - 1)">
            <img :src="$store.state.app.settings_paginate_button_left" alt="paginate_button_left">
        </button>
        <div class="paginate-buttons-around">
            <p class="paginate-buttons-around__current">{{ currentPage }}</p>
        </div>
        <button class="paginate-buttons_button" :disabled="currentPage === totalPages"
            @click="$emit('update:currentPage', currentPage + 1)">
            <img :src="$store.state.app.settings_paginate_button_right" alt="paginate_button_right">
        </button>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.paginate-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 60px;
    border-radius: 100px;
    background-color: white;
    width: max-content;
    &_button {}
}

.paginate-buttons-around {
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
</style>