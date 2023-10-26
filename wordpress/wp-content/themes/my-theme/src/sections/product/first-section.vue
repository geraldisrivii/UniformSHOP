<template>
    <section class="first-section">
        <div class="first-section-container container">
            <div class="first-section-left">
                <img class="first-section-left__image" :src="product.images[0].src" alt="product-image">
            </div>
            <div class="first-section-description">
                <div class="line first-section-description__line"></div>
                <p class="first-section-description__title">{{ product.name }}</p>
                <div class="first-section-description__rates-brand">
                    <div class="product-description-rate">
                        <img v-for="(rate, index) in rate" :key="index" :src="$store.state.app.settings_light_start" alt="">
                        <img v-for="(inRate, index) in inRate" :key="index" :src="$store.state.app.settings_dark_start"
                            alt="">
                    </div>
                    <p class="first-section-description__brand">Бренда: {{ product.cfs.brand }}</p>
                </div>
                <div class="diginties first-section-description-diginties">
                    <Diginity v-for="(diginity, index) in product.cfs.diginities" :key="index" class="first-section-description-diginties__item" :lineWidth="100" :title="diginity.title"
                        :text="diginity.text" />
                   
                </div>
                <basket-add-button @productAdd="productAdd" :text="'Добавить'" :productId="product.id"/>
            </div>
        </div>
    </section>
</template>

<script>
import Diginity from '@/components/Diginity.vue';
import rate from '@/mixins/rate';

export default {
    mixins: [rate],
    props: {
        product: {
            type: Object,
            required: true
        },
    },
    methods: {
        productAdd(count){
            if(count == 1){
                return this.$store.commit('basket/addBasketELement', {product: this.product, quantity: count})
            }
            if(count == 0){
                return this.$store.commit('basket/deleteBasketElement', {product: this.product, quantity: count})
            }
            return this.$store.commit('basket/updateBasketElement', {product: this.product, quantity: count})
        }
    },
    components: { Diginity },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>

.first-section {
    // margin-top: 80px;
    background-color: white;
}

.first-section-container {
    padding-top: 100px;
    padding-bottom: 80px;
    display: grid;
    grid-template-columns: 4fr 7fr;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    gap: 140px;
}

.first-section-left {
    &__image {
        width: 100%;
        // height: 100%;
    }
}

.first-section-description {
    &__line {
        margin-bottom: 20px;
        height: 5px;
    }

    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    &__rates-brand {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 40px;
    }

    &__brand {
        color: #292D32;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    &__button {}
}

.product-description-rate {
    align-items: center;
    display: flex;
}

.first-section-description-diginties {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 75%;
    gap: 30px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
    }
    margin-bottom: 60px;
    &__item {}
}

.button {
    &_around {}
}
</style>