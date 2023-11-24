<template>
    <section class="second-section container">
        <div class="products-box second-section__products">
            <Product :sale_price="product.sale_price" class="products-box__item" v-for="product in oneHalfProducts" :key="product.id"
                :price="product.regular_price" :imageSrc="product.images[0].src" :productId="product.id"
                :rate="Math.floor(Number(product.average_rating))" :title="product.name"></Product>
        </div>
        <div v-if="isSpecialsLoaded" class="spesials-box second-section__spesials">
            <special-item v-for="special in specials" :title="special.title.rendered" :text="special.content.rendered"
                :imageSrc="special.cfs.image"></special-item>
        </div>
        <div class="products-box second-section__products">
            <Product :sale_price="product.sale_price" class="products-box__item" v-for="product in twoHalfProducts" :key="product.id"
                :price="product.regular_price" :imageSrc="product.images[0].src" :productId="product.id"
                :rate="Math.floor(Number(product.average_rating))" :title="product.name"></Product>
        </div>
        <div class="paginate-box">
            <PaginatesButtons :totalPages="$store.state.katalog.totalPages" :currentPage="$store.state.katalog.currentPage"
                @update:currentPage="(newValue) => $store.commit('katalog/setCurrentPage', newValue)" />
        </div>
    </section>
</template>

<script>
import WP from '@/axiosWP';
import Product from '@/components/Product.vue'
import PaginatesButtons from '@/components/PaginatesButtons.vue';
export default {
    components: {
        Product,
        PaginatesButtons
    },
    data() {
        return {
            specials: [],
            isSpecialsLoaded: false,
        }
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    computed: {
        oneHalfProducts() {
            return this.products.slice(0, 8);
        },
        twoHalfProducts() {
            return this.products.slice(8, 16);
        }
    },
    async beforeCreate() {
        let specials = (await WP.get('specials')).data

        this.specials = specials

        this.isSpecialsLoaded = true;
    },
}
</script>

<style lang="scss" scoped>
.paginate-box {
    width: max-content;
    margin: 0 auto;
    margin-bottom: 60px;
}

.products-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, 285px);

    @media (max-width: 768px ) {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

    }

    transition: all 0.7 ease;
    gap: 20px;
    margin-bottom: 100px;

    &__item {
        width: 100%;
    }
}

.second-section {
    padding-top: 100px;

    &__products {}

    &__spesials {
        margin-bottom: 100px;
    }
}</style>