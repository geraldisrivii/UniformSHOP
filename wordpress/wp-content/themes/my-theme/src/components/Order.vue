<template>
    <div class="order">
        <div class="order-description">
            <div class="order-description__left">
                <p class="order-description__date">Заказ от {{ date }}</p>
                <p class="order-description__status">Статус заказа: <span>{{ status }}</span></p>
            </div>
            <div class="order-description__right">
                <p class="order-description__sum">Итого: <span>{{ total }}</span> $</p>
            </div>
        </div>
        <div class="order-items">
            <OrderItem v-for="item in items" :key="item.id" :imageSrc="item.image.src" :title="item.name"
                :price="item.price" :count="item.quantity" />
        </div>
    </div>
</template>

<script>
import OrderItem from './OrderItem.vue';

export default {
    props: {
        date: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true
        },
        total: {
            type: [String, Number],
            required: true,
        }
    },
    components: { OrderItem }
}
</script>

<style lang="scss" scoped>
.order-description {
    padding: 20px;
    border-radius: 20px 20px 0px 0px;
    background-color: #EDEDED;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    &__left {}

    &__date {
        color: #000;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        margin-bottom: 10px;
    }

    &__status {
        color: #000;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

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

    &__right {}

    &__sum {
        color: #4D4D4D;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: capitalize;

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
}

.order-items {}
</style>