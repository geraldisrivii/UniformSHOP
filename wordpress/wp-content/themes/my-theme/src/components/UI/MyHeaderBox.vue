<template>
    <div class="header-box">
        <div class="line"></div>
        <h3 class="header-box__title">
            {{ title }}
        </h3>
        <p class="header-box__duplicate-title">
            {{ title }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'header-box',
    props: {
        title: {
            required: true,
            type: String
        }
    }
}
</script>

<style lang="scss">
@import '@/variables.scss';

.header-box {
    padding-top: 20px;
    position: relative;
    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.84px;
        text-transform: uppercase;
    }

    &__duplicate-title {
        
        position: absolute;
        top: -7px;
        left: 20px;
        z-index: -1;
        color: transparent;
        -webkit-text-stroke: 2px #dddddd;
        font-family: Montserrat;
        font-size: 5rem;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
}
</style>