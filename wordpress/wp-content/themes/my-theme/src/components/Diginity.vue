<template>
    <div class="diginity">
        <div :style="{ width: lineWidth + '%'}" class="line"></div>
        <p class="diginity__title">{{ title }}</p>
        <p class="diginity__text" v-html="text">
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        lineWidth: {
            type: Number
        }
    },
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

.line {}
</style>