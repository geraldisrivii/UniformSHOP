<template>
    <section class="third-section">
        <div class="third-section-content container">
            <div v-if="isFetchedProducts" class="product-box">
                <div class="product-box-left">
                    <img class="product-box-left__image" :src="products[currentProductID].images[0].src"
                        :alt="products[currentProductID].images[0].name">
                </div>
                <div class="product-box-right">
                    <div class="line product-box-right__line"></div>
                    <p class="product-box-right__title">
                        {{ products[currentProductID].name }}
                    </p>
                    <p v-if="products[currentProductID].cfs.brand !== null" class="product-box-right__brand">
                        {{ 'Бренд: ' + products[currentProductID].cfs.brand
                        }}
                    </p>
                    <div class="product-box-right-diginities">
                        <Diginity v-for="diginity in lastTwoDiginities" :lineWidth="100" :title="diginity.title"
                            :text="diginity.text" />
                    </div>
                    <div class="product-box-buttons">
                        <button @click="$router.push({name: 'product', params: {id: products[currentProductID].id}})" class="button button_around">
                            {{ $store.state.page.third_section_btn_product }}
                        </button>
                        <button @click="$router.push({name: 'katalog', hash: '#first-section'})" class="button button_around button_gray">
                            {{ $store.state.page.third_section_btn_katalog }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="slider-box">
                <button @click="swiperPrev">
                    <img :src="$store.state.app.settings_slider_icon_left" alt="">
                </button>
                <div class="swiper-container-products">
                    <div class="swiper-wrapper">
                        <div v-for="product in products" :key="product.id" class="swiper-slide">
                            <ProductSliderItem
                                @update:currentProduct="(productID) => this.currentProductID = products.findIndex(item => item.id === productID)"
                                :id="product.id" :title="product.name" :imageSrc="product.images[0].src">
                            </ProductSliderItem>
                        </div>
                    </div>
                </div>
                <button @click="swiperNext">
                    <img :src="$store.state.app.settings_slider_icon_right" alt="">
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import Diginity from '@/components/Diginity.vue';
import ProductSliderItem from '@/components/ProductSliderItem.vue';
import WOO from '@/axiosWoocomerce';
import WP from '@/axiosWP';

import Swiper from 'swiper';
import 'swiper/css';

// import OAuth from 'oauth-1.0a';

// import crypto from 'crypto-js';

export default {
    components: { Diginity, ProductSliderItem },


    data() {
        return {
            products: [],
            isFetchedProducts: false,
            currentProductID: 0,
            swiper: {},
        }
    },
    computed: {
        lastTwoDiginities() {
            if (this.products[this.currentProductID].cfs.diginities !== null) {
                return this.products[this.currentProductID].cfs.diginities.slice(0, 2)
            }
            return [];
        }
    },
    async mounted() {
        let products = (await WOO.get('products')).data;

        console.log(products);

        this.products = products

        this.isFetchedProducts = true

        this.swiper = new Swiper('.swiper-container-products', {
            loop: true,
            slidesPerView: 4,
            breakpoints: {
                100: {
                    slidesPerView: 1,
                },
                350: {
                    slidesPerView: 1,
                },
                650: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            },
        });
    },
    methods: {
        swiperPrev() {
            this.swiper.slidePrev();
        },

        swiperNext() {
            this.swiper.slideNext();
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-container-products {
    overflow-x: hidden;
}

.slider-box {
    display: flex;
    gap: 20px;
    align-items: center;
}

.third-section {
    background-color: white;
    padding-top: 140px;
    padding-bottom: 140px;

    @media (max-width: 950px) {
        padding-top: 100px
    }

    @media (max-width: 650px) {
        padding-top: 20px;
    }

}

.product-box {
    display: grid;
    grid-template-columns: 10fr 13fr;

    @media (max-width: 950px) {
        grid-template-columns: 1fr;
    }

    margin-bottom: 100px;
    column-gap: 120px;
    grid-template-rows: 470px 1fr;
}

.product-box-left {
    display: flex;
    align-items: center;
    justify-content: center;

    &__image {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
}

.product-box-right {
    display: flex;
    flex-direction: column;

    &__line {
        height: 5px;
        margin-bottom: 35px;
    }

    &__title {
        margin-bottom: 25px;
        color: #000;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 1.6px;
        text-transform: uppercase;
    }

    &__description {
        margin-bottom: 60px;
    }

    &__brand {
        color: #292D32;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 60px;
    }
}

.product-box-right-diginities {
    display: grid;
    grid-template-columns: repeat(auto-fit, 260px);
    gap: 30px;
    margin-bottom: 80px;
}

.product-box-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.button {
    &_around {}

    &_gray {}
}
</style>