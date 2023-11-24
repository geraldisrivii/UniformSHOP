<template>
    <modal-window style="z-index: 1000;"
        @update:isDialogShow="(newValue) => $emit('update:isSinippingDialogShow', newValue)"
        :isDialogShow="isSinippingDialogShow">
        <div class="snipping-dialog">
            <input :value="firstName" @input="$emit('update:firstName', $event.target.value)" placeholder="ФИО" type="text"
                class="snipping-dialog__input input-text">
            <MySelect @mousedown.stop :title="'Ваш регион'" :isSearheble="true" :isWidthFullContainer="true"
                :isHasBorder="true" :currentOption="city" @update:currentOption="$emit('update:city', $event)"
                :options="cities" />
            <input :value="address" @input="$emit('update:address', $event.target.value)"
                placeholder="Адрес (улица, дом и квартира)" type="text" class="snipping-dialog__input input-text">
            <button @click="sendData" class="button button_around">Оформить заказ</button>
        </div>
    </modal-window>
</template>

<script>
import vueselect from 'vue-multiselect';
import MySelect from './UI/MySelect.vue';
import WOO from '@/axiosWoocomerce';
import Validator from '@/classes/Validator';
export default {
    props: {
        isSinippingDialogShow: {
            type: Boolean,
            required: true
        },
        firstName: '',
        address: '',
        city: null,
        cities: {
            type: Array,
            required: true
        }
    },
    watch: {
        firstName() {
            this.validData()
        },
        address() {
            this.validData()
        },
        city() {
            this.validData()
        },
    },
    methods: {
        validData() {
            let validator = new Validator()

            validator.setRules([
                {
                    name: 'address', rules: [
                        { type: 'min', value: 1, message: 'Адрес должен быть заполнен' },
                    ]
                },
                {
                    name: 'firstName', rules: [
                        { type: 'min', value: 1, message: 'ФИО должен быть заполнен' },
                    ]
                },
            ])
        },
        sendData() {
            let data = {
                shipping: {
                    first_name: this.firstName,
                    last_name: "",
                    address_1: this.address,
                    address_2: "",
                    city: this.city.label,
                    country: "RUSSIA"
                },
            }

            let result = WOO.put('customers/' + this.$store.state.user.user.ID, data).then(response => response.data)

            this.$emit('pay')

            console.log(result)
        }
    },
    components: { 'vue-select': vueselect, MySelect }
}
</script>

<style lang="scss" scoped>
.snipping-dialog {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__input {
        border: 2px solid rgb(233, 233, 233);
    }
}

.input-text {}
</style>