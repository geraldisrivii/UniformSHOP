<template>
    <button class="product-slider-item" @click="$emit('update:currentProduct', id)">
        <img class="product-slider-item__image" :src="imageSrc" alt="">
        <div class="product-slider-item-title-box">
            <!-- <div class="line product-slider-item-title-box__line"></div> -->
            <p class="product-slider-item__title">
                {{ title }}
            </p>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        imageSrc: {
            required: true
        },
        title: {
            required: true,
            type: String
        },
        id: {
            required: true,
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.product-slider-item-title-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.product-slider-item {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    cursor: pointer;
    border: 2px solid rgb(243, 243, 243);

    transition: all 0.3s;

    &__image {
        height: 80px;
    }

    &__title {
        height: 100%;
        color: #000;
        font-family: Montserrat;
        text-align: left;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: lowercase;
    }

    &:hover {
        background-color: $primary-color;
        .product-slider-item-title-box{
            p{
                color: white;
            }
        }
    }
}
</style>