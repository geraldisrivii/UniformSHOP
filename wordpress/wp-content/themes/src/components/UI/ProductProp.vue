<template>
    <div class="product-prop">
        <div class="product-prop__lines">
            <div class="product-prop__line product-prop__line_top"></div>
            <div class="product-prop__line product-prop__line_left"></div>
        </div>
        <div class="product-prop-description">
            <p class="product-prop-description__title">{{ title }}</p>
            <p class="product-prop-description__text">{{ text }}</p>
        </div>
        <!-- <div class="product-prop__line"></div> -->
    </div>
</template>

<script>
export default {
    name: 'product-prop',
    props: {
        title: {
            type: String,
            default: 'Название свойства:',
        },
        text: {
            type: String,
            default: 'Значение некоторого свойства в несколько слов'
        }
    },
}
</script>

<style lang="scss" scoped>
.product-prop {
    // background-color: rgb(240, 240, 240);
    // border-radius: 100px;
    // padding: 15px 40px;
    display: flex;
    align-items: center;
    gap: 10px;
    &__lines{
        // text-align: left;
        position: relative;
        top: -10px;
        left: 10px;
    }
    &__line {
        height: 20px;
        background-color: rgb(224, 224, 224);
        width: 4px;
        // display: inline-block;
        &_top{
            position: relative;

            transform: rotate(90deg);
        }
        &_left{
            position: relative;
            top: -12px;
            left: -10px;
        }
    }
}

.product-prop-description {
    // margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.54px;
    }

    &__text {
        color: #202020;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.54px;
    }
}
</style>