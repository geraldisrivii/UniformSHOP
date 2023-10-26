<template>
    <div class="diginity">
        <div class="diginity-rate">
            <img v-for="(rate, index) in rate" :key="index" :src="$store.state.app.settings_light_start" alt="">
            <img v-for="(inRate, index) in inRate" :key="index" :src="$store.state.app.settings_dark_start" alt="">
        </div>
        <p class="diginity__title">{{ title }}</p>
        <p class="diginity__text" v-html="text">
        </p>
    </div>
</template>

<script>
import rate from '@/mixins/rate'
export default {
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
        },
    },
    mixins: [rate],
}
</script>

<style lang="scss" scoped>
.diginity {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }

    &__text {
        color: #121212;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
.diginity-rate{
    display: flex;
    align-items: center;
    gap: 5px;
}
.line {}
</style>