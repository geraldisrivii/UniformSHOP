<template>
    <div>
        <main v-if="isDataLoaded && isProductLoaded && isAppLoaded">
            <FirstSection id="first-section" :rate="Math.floor(Number(product.average_rating))" :product="product" />
            <SecondSection :productProperties="product.cfs.props"/>
            <ThirdSection :categories="product.categories" />
        </main>
    </div>
</template>

<script>
import WP from '@/axiosWP'
import WOO from '@/axiosWoocomerce'
import FirstSection from '@/sections/product/first-section.vue';
import createOauthRequest from '@/helpers/createOauthRequest';
import SecondSection from '@/sections/product/second-section.vue';
import ThirdSection from '@/sections/product/third-section.vue';
export default {
    props: {
        isDataLoaded: {
            type: Boolean,
        },
        isAppLoaded: {
            type: Boolean
        }
    },
    data() {
        return {
            product: {},
            isProductLoaded: false
        }
    },
    computed: {
        productId() {
            return this.$route.params.id
        },
        // async averageRating(){
        //     let response = await WOO.get('products/reviews?product=' + this.product.id).then(response => response.data)

        //     // return 
        // }
    },
    async beforeCreate() {
        let pageData = (await WP.get('pages/253')).data;
        this.$store.state.page = pageData.cfs;

        await this.getProduct()

        if (this.isDataLoaded == false) {
            this.$emit('update:isDataLoaded', !this.isDataLoaded);
        }
    },
    watch: {
        async productId(){
            await this.getProduct()
            this.$router.push({hash: '#first-section'})
        }
    },
    methods: {
        async getProduct() {
            this.isProductLoaded = false

            let response = await createOauthRequest({
                url: `products/${this.productId}`,
            }, false)

            this.product = response.data

            this.isProductLoaded = true

        }
    },
    components: { FirstSection, SecondSection, ThirdSection }
}
</script>

<style lang="scss" scoped>
main {
    padding-top: 100px;
}
</style>