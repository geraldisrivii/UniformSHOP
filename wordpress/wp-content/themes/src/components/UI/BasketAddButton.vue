<template>
    <div class="box">
        <button v-if="alreadyHaveFirstInBasket == false" :disabled="maxQuanity == 0" @click="this.$emit('productAdd', 1)"
            class="button button_around basket-button">{{ text
            }}</button>
        <QuantityButtons v-else-if="isDataLoaded" @update:count="(newValue) => $emit('productAdd', newValue)"
            :maxQuanity="maxQuanity"
            :count="basketItems.find(item => item.product.id == productId) ? basketItems.find(item => item.product.id == productId).quantity : 0" />
        <p v-if="maxQuanity == 0">Товар закончился</p>
    </div>
</template>

<script>
import QuantityButtons from '@/components/QuantityButtons.vue'
import { mapState, mapGetters } from 'vuex'
import WOO from '@/axiosWoocomerce';
export default {
    name: 'basket-add-button',
    components: { QuantityButtons },
    props: {
        text: {
            type: String,
            required: true
        },
        productId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            maxQuanity: 0,
            isDataLoaded: false
        }
    },
    computed: {
        alreadyHaveFirstInBasket() {
            let element = this.$store.state.basket.elements.find(item => item.product.id == this.productId)
            return element && element.quantity > 0 ? true : false;
        },
        ...mapState({
            basketItems: (state) => state.basket.elements,
        })
    },
    methods: {
    },
    async beforeCreate() {
        let currentElement = await WOO.get('products/' + this.productId).then(response => response.data)

        this.maxQuanity = currentElement.stock_quantity;

        this.isDataLoaded = true

        let itemInBasket = this.basketItems.find(item => item.product.id == this.productId)

        if (itemInBasket ? itemInBasket.quantity : 0 > this.maxQuanity) {
            this.$store.commit('basket/updateBasketElement', { product: currentElement, quantity: this.maxQuanity })
        }
    }
}
</script>

<style lang="scss" scoped>
.box{
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
}
</style>