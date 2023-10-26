<template>
    <section class="fourth-section">
        <div class="fourth-section-content container">
            <header-box :title="$store.state.page.fourth_section_title" />
            <div class="fourth-section-content-reviews-box">
                <button @click="swiperPrev">
                    <img :src="$store.state.app.settings_slider_icon_left" alt="">
                </button>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div v-for="review in reviews" key="review.id" class="swiper-slide">
                            <Review class="fourth-section-content-reviews__item"
                                :rate="Number(Object.values(review.cfs.rate)[0])" :title="review.title.rendered"
                                :text="review.content.rendered" />
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
import WOO from '@/axiosWoocomerce';
import WP from '@/axiosWP';

import Review from '@/components/Review';
import swiper from '@/mixins/swiper';

import Swiper from 'swiper';
import 'swiper/css';


export default {
    components: {
        Review
    },
    mixins: [
        swiper
    ],
    data() {
        return {
            reviews: [],
        }
    },
    async mounted() {
        this.reviews = (await WP.get('reviews')).data;
        this.initializeSwiper();
    },
    methods: {
        initializeSwiper() {
            this.swiper = new Swiper('.swiper-container', {
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
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    overflow-x: hidden;
}

.fourth-section {
    padding-top: 140px;
    padding-bottom: 140px;
}

.fourth-section-content {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.container {}

.fourth-section-content-reviews-box {
    display: flex;
    align-items: center;
    gap: 30px;
}

.fourth-section-content-reviews {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    justify-items: flex-start;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    &__item {}
}
</style>