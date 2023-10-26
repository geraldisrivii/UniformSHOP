<template>
    <button @click="$router.push({name: 'product', params: {id: productId}}, { absolute: true })" class="product">
        <img class="product__image" :src="imageSrc" alt="product-image">
        <div class="product-description-box">
            <div class="product-description">
                <p class="product-description__title"> {{ title }} </p>
                <p class="product-description__price"> {{ price }} $ </p>
            </div>
            <div class="product-description-rate">
                <img v-for="(rate, index) in rate" :key="index" :src="$store.state.app.settings_light_start" alt="">
                <img v-for="(inRate, index) in inRate" :key="index" :src="$store.state.app.settings_dark_start" alt="">
            </div>
        </div>
    </button>
</template>

<script>
import rate from '@/mixins/rate';
export default {
    mixins: [rate],
    props: {
        imageSrc: {
            type: String
        },
        title: {
            type: String
        },
        price: {
            type: String
        },
        productId: {
            type: Number,
            default: 250,
        }
    }
}
</script>

<style lang="scss" scoped>
.product {
    background-color: white;
    padding-bottom: 25px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    &__image {
        width: 100%;
        object-fit: contain;
        margin-bottom: 20px;
    }


}
.product-description-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100% ;
}
.product-description {
    padding: 0px 20px;
    &__title {
        min-height: 45px;
        color: #000;
        text-align: center;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 10px;
    }


    &__price {
        color: #003D99;
        text-align: center;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
}
</style>