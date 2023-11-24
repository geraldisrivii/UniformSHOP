<template>
    <div class="slider-images-box">
        <div @click="$emit('update:isSliderShow', false)" v-show="isSliderShow" class="slider-images">
            <button v-if="imagesMoreOne" class="slider-images__button" @click.stop="swiperPrev">
                <img :src="$store.state.app.settings_slider_icon_left" alt="">
            </button>
            <div ref="swiper-container" class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="(image, index) in images" :key="index" class="swiper-slide">
                        <img @click.stop class="slider-images__image" :src="image.path" :alt="image.name">
                    </div>
                </div>
            </div>
            <button v-if="imagesMoreOne" class="slider-images__button " @click.stop="swiperNext">
                <img :src="$store.state.app.settings_slider_icon_right" alt="">
            </button>
            <button @click="$emit('update:isSliderShow', false)" class="close-button">
                <div class="close-button__line close-button__line_1"></div>
                <div class="close-button__line close-button__line_2"></div>
            </button>
        </div>
    </div>
</template>

<script>
import swiper from '@/mixins/swiper';
import Swiper from 'swiper';
export default {
    mixins: [swiper],
    computed: {
        imagesCount() {
            return this.images.length
        },
        imagesMoreOne() {
            return this.imagesCount > 1;
        }
    },
    props: {
        isSliderShow: {
            type: Boolean,
            required: true
        },
        images: {
            type: [Array, Object],
            required: true
        }
    }, 
    mounted() {
        this.initializeSwiper();
    },
    methods: {
        initializeSwiper() {
            this.swiper = new Swiper(this.$refs['swiper-container'], {
                loop: true,
                slidesPerView: 1,
            });
        }
    }
}
</script>

<style lang="scss" scoped>


.swiper-container {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
}

.swiper-wrapper {
    // width: 100%;
}

.swiper-slide {}

.slider-images {
    overflow: hidden;
    padding: 50px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);

    &__image {
        height: 80vh;
        width: 100%;
        object-fit: contain;
    }

    &__button {
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        width: 50px;
        height: 50px;

        &::before {
            position: absolute;
            border-radius: 100%;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            background-color: white;
            content: '';
        }
    }
}

</style>