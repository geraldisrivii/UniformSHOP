<template>
    <right-dialog class="basket-dialog" :isRightDialogShow="isBasketShow"
        @update:isRightDialogShow="(newValue) => $emit('update:isBasketShow', newValue)">
        <div class="basket-dialog-container">
            <div v-if="countBasket != 0" class="basket-elements">
                <BasketItem v-for="item in $store.state.basket.elements" :key="item.product.id"
                    :imageSrc="item.product.images[0].src" :title="item.product.name" :price="item.product.price"
                    :count="item.quantity" :product="item.product" />
            </div>
            <QuestionBox v-else :buttonText="'В каталог'" @action="$router.push({ name: 'katalog' })" :title="'Корзина пуста'"
                :text="'Перейдите в каталог и добавьте товары'" />
            <div class="basket-payment">
                <p class="basket-payment__total">Итого: <span>{{ totalPrice }}</span> $</p>
                <button :disabled="totalPrice == 0 || userIsntNull == false" @click="createPayment"
                    class="basket-payment__button button button_around">Оплатить</button>
            </div>
        </div>
        <Transition name="snipping-dialog" @before-enter="(el) => el.style.zIndex = '1000'">
            <SnippingDialog v-if="isSinippingDialogShow" v-model:isSinippingDialogShow="isSinippingDialogShow" />
        </Transition>
    </right-dialog>
</template>

<script>
import BasketItem from './UI/BasketItem.vue';
import WP from '@/axiosWP'
import WOO from '@/axiosWoocomerce'

import { mapGetters, mapState } from 'vuex';
import QuestionBox from './QuestionBox.vue';
import SnippingDialog from './SnippingDialog.vue';

export default {
    props: {
        isBasketShow: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            isSinippingDialogShow: false
        }
    },
    components: { BasketItem, QuestionBox, SnippingDialog },
    computed: {
        totalPrice() {
            let prices = this.$store.state.basket.elements.map(item => item.quantity > 0 ? item.product.price * item.quantity : 0)
            console.log(this.$store.state.basket.elements)
            var sum = prices.reduce(function (a, b) {
                a = Number(a)
                b = Number(b)
                return a + b;
            }, 0);

            return sum
        },
        ...mapGetters({
            countBasket: 'basket/countBasket',
            userIsntNull: 'user/userIsntNull'
        })
    },
    methods: {
        // async preparePayment(){
        //     let response = await WOO.get('https://legal-services.site/wp-json/wc/v3/customers/6').then(response => response.data)

        //     console.log(response)
        //     this.isSinippingDialogShow = response.shipping.city == ''
        // },
        async createPayment() {
            let data = {
                'amount': fx(this.totalPrice).from("USD").to("RUB"),
                'items': this.$store.state.basket.elements.filter(item => item.quantity > 0)
            }
            let response = await WP.post('createPayment', data, {
                withCredentials: true
            }).then(response => response.data)

            console.log(response)

            window.location.href = response.yookassa_object.confirmation.confirmation_url
        }
    },
    mounted() {
        setTimeout(() => {
            this.$emit('mounted')
        }, 500)
    }
}
</script>

<style lang="scss" scoped>
.basket-payment {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 25px;

    @media (max-width: 15px) {
        padding: 15px;
    }

    background-color: white;
    border-radius: 10px;

    &__total {
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;

        span {
            color: #000;
            text-align: center;
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-transform: uppercase;
        }
    }

    &__button {}
}

.basket-dialog {
    z-index: 1000;
}

.basket-dialog-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: flex-start;

    // height: 80vh;
    overflow-x: hidden;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    gap: 40px;
}

.basket-elements {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.basket-payment {}
</style>