
<template>
    <main v-if="isDataLoaded">
        <FirstSection @update:selectedCategory="setSelectedCategory" @update:selectedSortOption="setSelectedSortOption"
            @update:searchText="setSearchText" />
        <SecondSection id="second-section" v-if="isProductsLoaded" :products="products" />
    </main>
</template>

<script>
import FirstSection from '@/sections/katalog/first-section.vue';

import WP from '@/axiosWP';
import createOauthRequest from '@/helpers/createOauthRequest';

import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
import SecondSection from '@/sections/katalog/second-section.vue';


export default {
    components: { FirstSection, SecondSection },
    data() {
        return {
            products: [],
            isProductsLoaded: false,
        }
    },
    props: {
        isDataLoaded: {
            type: Boolean,
        }
    },
    async beforeCreate() {
        let pageData = (await WP.get('pages/164')).data;

        this.$store.state.page = pageData.cfs;

        if (this.isDataLoaded == false) {
            this.$emit('update:isDataLoaded', !this.isDataLoaded)
        }
    },
    computed: {
        ...mapState({
            selectedCategory: state => state.katalog.selectedCategory,
            selectedSortOption: state => state.katalog.selectedSortOption,
            searchText: state => state.katalog.searchText,
            currentPage: state => state.katalog.currentPage
        }),
        ...mapGetters({
            requestParams: 'katalog/requestParams'
        })
    },
    mounted() {
        this.getProducts();
    },
    watch: {
        searchText(){
            this.getProducts();
        },
        selectedCategory(){
            this.getProducts();
            this.$router.push({ hash: '#second-section' })
        },
        selectedSortOption(){
            this.getProducts();
            this.$router.push({ hash: '#second-section' })
        },
        currentPage(){
            this.getProducts();
            this.$router.push({ hash: '#second-section' })
        },
    },
    methods: {
        async getProducts() {
            let url = 'products?';

            let response = await createOauthRequest({
                url: url,
                method: 'GET',
                params: this.requestParams
            }, false)

            this.$store.commit('katalog/setTotalPages', Number(response.headers.get('X-WP-TotalPages')))

            let products = response.data;

            console.log(products)

            this.products = products;

            this.isProductsLoaded = true
        },

        ...mapMutations({
            setCategories: 'katalog/setCategories',
            setSelectedCategory: 'katalog/setSelectedCategory',
            setSortOptions: 'katalog/setSortOptions',
            setSelectedSortOption: 'katalog/setSelectedSortOption',
            setSearchText: 'katalog/setSearchText',
        }),
    }
}
</script>

<style lang="scss" scoped></style>