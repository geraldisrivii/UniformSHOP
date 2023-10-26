<template>
    <modal-window style="z-index: 1000;" @update:isDialogShow="(newValue) => $emit('update:isSinippingDialogShow', newValue)"
        :isDialogShow="isSinippingDialogShow">
        <input type="text" class="input-text">
        <input type="text" class="input-text">
        <input type="text" class="input-text">
        <vue-select v-model="snipping.country" :searchable="true" :options="countries"/>
    </modal-window>
</template>

<script>
import vueselect from 'vue-multiselect';
export default {
    props: {
        isSinippingDialogShow: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            snipping: {
                firstName: '',
                address: '',
                city: '',
                country: '',
            },
            countries: ['list', 'of', 'options']
        }
    },
    components: { 'vue-select': vueselect }
}
</script>

<style lang="scss" scoped></style>