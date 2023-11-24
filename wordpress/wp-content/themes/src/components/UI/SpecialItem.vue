<template>
    <div :style="{ background: `linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.55) 41.15%, rgba(0, 0, 0, 0.45) 65.62%, rgba(104, 104, 104, 0.20) 85.42%, rgba(255, 255, 255, 0.00) 100%), url('${imageSrc}') center/cover no-repeat` }"
        class="special">
        <p class="special__title">{{ title }}</p>
        <p class="special__text" v-html="text"></p>
    </div>
</template>

<script>
export default {
    name: 'special-item',
    props: {
        title: {
            type: String,
        },
        text: {
            type: String
        },
        imageSrc: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.special {
    min-height: 340px;
    padding: 70px 48px;
    border-radius: 5px;

    &__title {
        color: #FFF;
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    &__text {
        color: #FFF;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }
}
</style>