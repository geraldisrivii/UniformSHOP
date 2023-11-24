<template>
    <div class="product-review">
        <div class="product-review__rate">
            <img v-for="(rate, index) in rate" :key="index" :src="$store.state.app.settings_light_start" alt="">
            <img v-for="(inRate, index) in inRate" :key="index" :src="$store.state.app.settings_dark_start" alt="">
        </div>
        <p class="product-review__title"> {{ title }} </p>
        <div class="product-review__content" v-html="content"></div>
        <div class="product-review-chosen-files">
            <div v-for="(image, index) in images" :key="index" class="product-review-chosen-files-file">
                <button @click="selectedImage = image, isSliderShow = true">
                    <img class="product-review-chosen-files-file__image" :src="image.path" :alt="image.name">
                </button>
            </div>
        </div>
    </div>
    <Library :images="images" v-model:isSliderShow="isSliderShow"/>
    <!-- <div class="slider-images-box">
        <div @click="isSliderShow = false" v-show="isSliderShow" class="slider-images">
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
            <button @click="isSliderShow = false" class="close-button">
                <div class="close-button__line close-button__line_1"></div>
                <div class="close-button__line close-button__line_2"></div>
            </button>
        </div>
    </div> -->
</template>

<script>
import rate from '@/mixins/rate';
import swiper from '@/mixins/swiper';
import Swiper from 'swiper';
import Library from './Library.vue';



export default {
    mixins: [rate, swiper],
    data() {
        return {
            selectedImage: {},
            isSliderShow: false,
        };
    },
    computed: {
        imagesCount() {
            return this.images.length;
        },
        imagesMoreOne() {
            return this.imagesCount > 1;
        }
    },
    props: {
        content: {
            type: String,
            default: '<p class="product-review-content-title">Привет, это отзыв</p><p>Привет, это текст отзыва</p>'
        },
        title: {
            type: String,
            default: 'Отзыв'
        },
        images: {
            type: Object,
            default: () => []
        }
    },
    components: { Library }
}
</script>

<style lang="scss" scoped>
.close-button {
    position: fixed;
    top: 50px;
    right: 80px;
    height: 40px;
    width: 40px;

    &__line {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 40px;
        width: 2px;
        background-color: white;
        border-radius: 2px;

        &_1 {
            transform: rotate(45deg);
        }

        &_2 {
            transform: rotate(-45deg);
        }
    }
}

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

.product-review-chosen-files {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, 100px);
    grid-template-rows: repeat(auto-fit, 100px);
    width: 100%;
}

.product-review-chosen-files-file {
    display: flex;
    flex-direction: column;
    width: 100%;

    overflow: hidden;

    &__image {
        width: 100%;
        height: 80%;
        object-fit: cover;
        border-radius: 5px;
    }
}


.product-review {
    padding: 20px 50px;
    background-color: white;
    border-radius: 6px;

    &__rate {
        margin-bottom: 10px;
    }

    &__content {
        margin-bottom: 30px;
    }

    &__title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }
}
</style>

<style lang="scss">
.product-review-content-title {
    margin-bottom: 10px;
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
}
</style>