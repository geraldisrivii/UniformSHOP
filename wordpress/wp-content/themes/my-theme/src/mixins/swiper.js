export default {
    data() {
        return {
            swiper: {},
        }
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