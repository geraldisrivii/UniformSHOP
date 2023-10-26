<template>
    <section class="third-section">
        <div class="third-section-container container">
            <div class="third-section-title-box">
                <header-box class="third-section-title-box__header" :title="$store.state.page.alike_products_title" />
                <button class="button button_around third-section-title-box__button">{{
                    $store.state.page.alike_products_button_text }}</button>
            </div>
            <div v-if="isProductsLoaded" class="third-section-alike-products">
                <Product v-for="(product, index) in firstFourProducts" :key="index" :rate="Math.floor(Number(product.average_rating))"
                    :title="product.name" :price="product.price" :productId="product.id" :imageSrc="product.images[0].src" />
            </div>
        </div>
    </section>
</template>

<script>
import AddReviewDialog from '@/components/AddReviewDialog.vue';
import Product from '@/components/Product.vue';
import WOO from '@/axiosWoocomerce';


export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            products: [],
            isProductsLoaded: false,
            productId: this.$route.params.id,
        }
    },
    computed: {
        firstFourProducts() {
            return this.products.slice(0, 4);
        }
    },
    components: { Product, AddReviewDialog },
    async beforeCreate() {
        let soretedCategories = this.categories.sort((first, second) => first.id - second.id < 0 ? 1 : -1)
        let sameProducts = [];
        for (let index = 0; index < this.categories.length; index++) {

            let beforeAddedSameProducts = (await WOO.get('products', {
                'params': {
                    'category': soretedCategories[index].id
                }
            })).data
            sameProducts.forEach(product => {
                beforeAddedSameProducts = beforeAddedSameProducts.filter(item => {
                    return item.id !== product.id
                })
            })
            sameProducts.push(...(beforeAddedSameProducts))
            sameProducts = sameProducts.filter(product => product.id != this.productId)
            if (sameProducts.length >= 4) {
                break;
            }
        }

        this.products = sameProducts;

        this.isProductsLoaded = true
    }
}
</script>

<style lang="scss" scoped>
.third-section {
    padding-top: 100px;
    padding-bottom: 100px;
}

.third-section-container {
    display: flex;
    flex-direction: column;
    gap: 65px;
}

.third-section-title-box {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr max-content;

    @media (max-width: 550px ) {
        grid-template-columns: 1fr;
        gap: 60px;
    }
    &__button {}
    &__header {
        
        // width: max-content;
    }
}

.third-section-alike-products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
    gap: 20px;
}
</style>