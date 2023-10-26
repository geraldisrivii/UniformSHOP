<template>
    <div class="order-item">
        <img class="order-item__image" :src="imageSrc" :alt="title">
        <div class="order-item-description">
            <div class="order-item-description__left">
                <p class="order-item-description__title">{{ title }}</p>
                <p class="order-item-description__price">{{ price }} $ / шт</p>
            </div>
            <div class="order-item-description__right">
                <p class="order-item-description__quantity-price">Итого: <span>{{ quantityPrice }}</span> $ </p>
                <div class="order-item-description-quantity">
                    Количество: <span>{{ count }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            default: 'somegood'
        },
        price: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
    },
    computed: {
        quantityPrice() {
            return this.count * this.price
        }
    },
}
</script>

<style lang="scss" scoped>
.order-item {
    display: flex;
    gap: 40px;
    padding: 14px 25px;
    background-color: white;
    align-items: center;

    // border-radius: 10px;
    @media (max-width: 550px) {
        gap: 30px;
        padding: 12px 22px;
    }

    &__image {
        width: 80px;
        height: 80px;

        @media (max-width: 760px) {
            width: 200px;
            height: 200px;
        }

        @media (max-width: 550px) {
            width: 80px;
            height: 80px;
        }
    }
}

.order-item-description {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 760px) {
        flex-direction: column;
        gap: 20px;
    }

    width: 100%;

    &__left {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    &__price {
        color: #000;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }

    &__right {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-right: 20px;
    }

    &__quantity-price {
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
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-transform: uppercase;
        }
    }
}

.order-item-description-quantity {
    color: #4D4D4D;
    text-align: center;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
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
}</style>