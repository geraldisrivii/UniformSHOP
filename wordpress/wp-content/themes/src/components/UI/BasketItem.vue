<template>
    <div class="basket-item">
        <img class="basket-item__image" :src="imageSrc" :alt="title">
        <div class="basket-item-description">
            <div class="basket-item-description__left">
                <p class="basket-item-description__title">{{ title }}</p>
                <p class="basket-item-description__price">{{ price }}₽ / шт</p>
            </div>
            <div v-if="maxQuanity != 0" class="basket-item-description__right">
                <p class="basket-item-description__quantity-price">Итого: <span>{{ quantityPrice }}</span>₽ </p>
                <div class="basket-item-description-quantity">
                    <QuantityButtons v-if="isDataLoaded" :border="false" :maxQuanity="maxQuanity" @update:count="productAdd"
                        :count="count" />
                </div>
            </div>
            <div v-else-if="isDataLoaded" class="if-not-existed">
                <p class="basket-item-description__advice">Товар закончился. </p>
                <button @click="this.$store.commit('basket/deleteBasketElement', { product: this.product, quantity: count })" class="button button_around">Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
import QuantityButtons from '@/components/QuantityButtons.vue'
import WOO from '@/axiosWoocomerce'

export default {
    components: { QuantityButtons },
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'somegood'
        },
        price: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        quantityPrice() {
            return this.count * this.price
        }
    },
    data() {
        return {
            maxQuanity: 0,
            isDataLoaded: false
        }
    },
    async beforeCreate() {
        let currentElement = await WOO.get('products/' + this.product.id).then(response => response.data)

        this.maxQuanity = currentElement.stock_quantity;


        this.isDataLoaded = true

        if (this.count > this.maxQuanity) {
            this.$store.commit('basket/updateBasketElement', { product: currentElement, quantity: this.maxQuanity })
        }
    },
    methods: {
        productAdd(count) {
            if (count == 1) {
                return this.$store.commit('basket/addBasketELement', { product: this.product, quantity: count })
            }
            if (count <= 0) {
                return this.$store.commit('basket/deleteBasketElement', { product: this.product, quantity: count })
            }
            return this.$store.commit('basket/updateBasketElement', { product: this.product, quantity: count })
        }
    }
}
</script>

<style lang="scss" scoped>
.if-not-existed{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.basket-item {
    display: flex;
    gap: 40px;
    padding: 18px 30px;

    @media (max-width: 850px) {
        padding: 15px 25px;
    }

    @media (max-width: 550px) {
        padding: 12px 22px;
    }

    background-color: white;
    align-items: center;
    border-radius: 10px;

    &__image {
        width: 120px;
        height: 120px;

        @media (max-width: 850px) {
            width: 100px;
            height: 100px;
        }

        @media (max-width: 550px) {
            width: 80px;
            height: 80px;
        }
    }
}

.basket-item-description {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 10px;

    @media (max-width: 550px) {
        flex-direction: column;
        gap: 20px;
    }

    &__left {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 20px;

        @media (max-width: 700px) {
            font-size: 18px;
        }

        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    &__price {
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }

    &__right {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-right: 20px;
    }

    &__quantity-price {
        color: #4D4D4D;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: capitalize;

        span {
            color: #000;
            text-align: center;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-transform: uppercase;
        }
    }
}

.basket-item-description-quantity {}
</style>