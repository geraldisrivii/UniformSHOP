<template>
    <section class="second-section">
        <div class="second-section-container container">
            <div class="second-section-description">
                <p class="second-section__title">
                    {{ currentVisibleMenu.label }}
                </p>
                <button @click="isAddReviewDialogShow = !isAddReviewDialogShow" v-if="currentVisibleMenu.value === 'reviews'" class="button button_around second-section__button" >Добавить отзыв</button>
            </div>
                <div class="second-section-grid">
                <div class="second-section-left">

                    <props-slider v-if="currentVisibleMenu.value === 'props'" :isShow="isShowProps"
                        @update:isShow="() => { propsHeight = '100%'; isShowProps = !isShowProps }" :height="propsHeight"
                        class="second-section-left-props">
                        <product-prop v-for="(prop, index) in productProperties" :key="index" class="second-sections-left-props__item" 
                        :title="prop.key"
                        :text="prop.value"
                        />
                    </props-slider>
                    <product-review-box @paginate="reviewsPage += 1" v-if="productReviews.length > 0 && currentVisibleMenu.value === 'reviews'">
                        <ProductReview :title="productReview.title" :images="productReview.images" :content="productReview.review" v-for="productReview in productReviews" key="productReview.id" :rate="productReview.rating" />
                    </product-review-box>
                    <p 
                        v-if="productReviews.length == 0 && currentVisibleMenu.value === 'reviews'"
                        class="second-section-left__no-reviews">
                        >
                        Отзывов нет, будь первым
                    </p>
                </div>
                <div class="second-section-right">
                    <my-menu :buttons="buttonsInMenu" :currentValue="currentVisibleMenu"
                        @update:currentValue="(newValue) => currentVisibleMenu = newValue" />
                    <QuestionBox @action="jivoOpen" />
                </div>
            </div>
        </div>
    </section>
    <AddReviewDialog v-model:review="review" @update:isAddReviewDialogShow="isAddReviewDialogShow = $event" :isAddReviewDialogShow="isAddReviewDialogShow"/>
</template>

<script>
import AddReviewDialog from '@/components/AddReviewDialog.vue';
import ProductReview from '@/components/ProductReview.vue';
import QuestionBox from '@/components/QuestionBox.vue';
import WOO from '@/axiosWoocomerce';

export default {
    props:  {
        productProperties: {
            type: Object, 
            required: true,
        }
    },
    data() {
        return {
            propsHeight: '340px',
            isShowProps: false,
            currentVisibleMenu: { label: 'Свойства товара', value: 'props' },
            buttonsInMenu: [
                { label: 'Свойства товара', value: 'props' },
                { label: 'Отзывы о товаре', value: 'reviews' },
            ],
            reviewsPage: 1,
            productReviews: [],
            isAddReviewDialogShow: false,
            review: {},
        }
    },
    computed: {
        productIdComputed(){
            return this.$route.params.id
        },
    },
    watch: {
        reviewsPage(){
            this.getProductReviews()
        },
        productIdComputed(){
            this.getProductReviews()
        },
        review(){
            this.productReviews.unshift(this.review)
        }
    },
    components: { QuestionBox, ProductReview, AddReviewDialog },
    methods: {
        jivoOpen() {
            let result = jivo_api.open()
        },
        async getProductReviews(){
            let reviews = (await WOO.get('products/reviews', {
                params: {
                    product: this.productIdComputed,
                    per_page: 8,
                    page: this.reviewsPage
                }
            })).data;

            console.log(reviews)

            this.productReviews.push(...reviews)
        }
    },
    mounted(){
        this.getProductReviews()
    }

}
</script>

<style lang="scss" scoped>
.second-section-description{
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 35px;
}
.second-section {
    padding-top: 80px;
    background-color: white;
    padding-bottom: 100px;

    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.66px;
        text-transform: uppercase;
    }
}

.second-section-grid {
    display: grid;
    grid-template-columns: 5fr 2fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    gap: 60px;
}

.second-section-left {
    &__no-reviews{
        color: #000;
        font-family: Montserrat;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: 0.66px;
        text-transform: uppercase;
    }
}

.second-section-left-props {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.second-section-right {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>