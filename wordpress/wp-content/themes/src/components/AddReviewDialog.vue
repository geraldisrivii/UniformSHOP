<template>
    <div class="add-review-dialog-container">
        <modal-window @update:isDialogShow="(newValue) => $emit('update:isAddReviewDialogShow', newValue)"
            :isDialogShow="isAddReviewDialogShow">
            <form @submit.prevent="addReview" class="add-review-dialog">
                <div class="product-review__rate">
                    <img class="add-review-dialog__image" @mouseover="(event) => mouseEnter(event, index)" v-for="(inRate, index) in inRate" :key="index" :src="$store.state.app.settings_dark_start" alt="">
                </div>
                <input placeholder="Заголовок" name="title" type="text" class="input-text add-review-dialog__title" />
                <textarea name="review" class="text-area add-review-dialog__textarea"></textarea>
                <file-input :isMultiple="true" v-model:images="images" name="images" />
                <button type="submit" class="button button_around add-review-dialog__button">Отправить</button>
                <Transition name="preloader">
                    <div v-if="isPreloaderEnabled" class="pleloader-box">
                        <img class="pleloader-box__image" :src="$store.state.app.settings_preloader_icon"
                            alt="preloader-icon">
                    </div>
                </Transition>   
            </form>
        </modal-window>
    </div>
</template>

<script>
import WOO from '@/axiosWoocomerce';
import rate from '@/mixins/rate';

export default {
    computed: {
        inRate(){
            return 5 - this.rate;
        },
    },
    props: {
        isAddReviewDialogShow: {
            type: Boolean,
            required: true
        },
        review: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            images: [],
            isPreloaderEnabled: false,
            rate: 0,
            index: 1,
        }
    },
    methods: {
        async addReview(event) {
            let formData = new FormData(event.target)

            formData.append('product_id', this.$route.params.id)
            formData.append('reviewer', 'someone')
            formData.append('reviewer_email', 'someone@example.com')
            formData.append('images', this.images)
            formData.append('rating', this.index)

            this.isPreloaderEnabled = true;
            let response = await WOO.post('products/reviews', formData);
            this.isPreloaderEnabled = false;

            if (response.statusText == 'Created') {
                this.$emit('update:isAddReviewDialogShow', false)
                this.$emit('update:review', response.data)
            }
        },
        mouseEnter(event, index){
            let children = event.target.parentElement.children

            for (let i = 0; i <= index; i++) {
                children[i].src = this.$store.state.app.settings_light_start
            }
            this.index = index + 1;
            for (let i = index + 1; i < children.length; i++) {
                children[i].src = this.$store.state.app.settings_dark_start
            }
        },
    }
}
</script>

<style lang="scss" scoped>

.enabled{
    background-color: orange;
}
.preloader-enter-active,
.preloader-leave-active {
    transition: opacity 0.5s ease;
}

.preloader-enter-from,
.preloader-leave-to {
    opacity: 0;
}

@import '@/variables.scss';

.pleloader-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $accent-color;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__image {
        width: 100px;
        height: 100px;
    }
}

.add-review-dialog-backdrop {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
}

.add-review-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 600px;
    padding: 20px;
    min-height: 300px;
    z-index: 10;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
        width: 100%;
    }

    &__title {
        border: 2px solid lightgray;
    }


    &__textarea {
        height: 200px;
    }

    &__file-input {}

    &__button {}
    &__image {
        width: 30px ;
        height: 30px;
    }
}
</style>