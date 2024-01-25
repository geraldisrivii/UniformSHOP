<template>
    <right-dialog class="basket-dialog" :isRightDialogShow="isBasketShow"
        @update:isRightDialogShow="(newValue) => $emit('update:isBasketShow', newValue)">
        <div class="basket-dialog-container">
            <div v-if="countBasket != 0" class="basket-elements">
                <BasketItem v-for="item in $store.state.basket.elements" :key="item.product.id"
                    :imageSrc="item.product.images[0].src" :title="item.product.name" :price="item.product.price"
                    :count="item.quantity" :product="item.product" />
            </div>
            <QuestionBox v-else :buttonText="'В каталог'" @action="$router.push({ name: 'katalog' })"
                :title="'Корзина пуста'" :text="'Перейдите в каталог и добавьте товары'" />
            <div class="basket-payment">
                <p class="basket-payment__total">Итого: <span>{{ totalPrice }}</span> ₽</p>
                <button :disabled="totalPrice == 0 || userIsntNull == false" @click="isSinippingDialogShow = true"
                    class="basket-payment__button button button_around">Оплатить</button>
            </div>
        </div>
        <Transition name="snipping-dialog" @before-enter="(el) => el.style.zIndex = '1000'">
            <SnippingDialog v-model:cities="cities" @pay="createPayment" v-model:address="shipping.address" v-model:city="shipping.city"
                v-model:firstName="shipping.firstName" v-if="isSinippingDialogShow"
                v-model:isSinippingDialogShow="isSinippingDialogShow" />
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
            isSinippingDialogShow: false,
            shipping: {
                firstName: '',
                address: '',
                city: null,
            },
            isCustomerLoaded: false,
            cities: [
                { name: "Омская область, Омск", label: 'Omsk' },
                { name: "Омская область, Тара", label: 'Tara' },
                { name: "Омская область, Исилькуль", label: 'Isilkul' },
            ],
        }
    },
    components: { BasketItem, QuestionBox, SnippingDialog },
    computed: {
        totalPrice() {
            let prices = this.$store.state.basket.elements.map(item => item.quantity > 0 ? item.product.price * item.quantity : 0)
            
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
        async createPayment() {
            let data = {
                amount: this.totalPrice,
                items: this.$store.state.basket.elements.filter(item => item.quantity > 0),
                shipping: {
                    first_name: this.shipping.firstName,
                    last_name: "",
                    address_1: this.shipping.address,
                    address_2: "",
                    city: this.shipping.city.label,
                    country: "RUSSIA"
                },
            }
            let response = await WP.post('/payments', data, {
                withCredentials: true
            }).then(response => response.data)


            window.location.href = response.yookassa_object.confirmation.confirmation_url
        }
    },
    async beforeCreate() {
        if(!this.$store.state.user.user){
            return false;
        }

        let customer = await WOO.get('customers/' + this.$store.state.user.user.ID).then(response => response.data)


        this.isCustomerLoaded = true

        this.shipping.firstName = customer.shipping.first_name
        this.shipping.address =  customer.shipping.address_1
        this.shipping.city =  customer.shipping.city == '' ? null : this.cities.find(city => city.label == customer.shipping.city)
    },
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

.basket-payment-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__data {
        font-size: 16px;
        text-transform: uppercase;
        color: rgb(85, 85, 85);
        span{
            font-weight: 500;
            color: black;
            font-size: 18px;
            text-transform: none;
        }
    }
}


</style>