<template>
    <div class="question-box">
        <p class="question-box__title">{{ title }}</p>
        <p class="question-box__text">{{ text }}</p>
        <button @click="$emit('action')" class="question-box__button button button_around">{{ buttonText }}</button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Есть вопросы?'
        },
        text: {
            type: String,
            default: 'Задайте их нам'
        },
        buttonText: {
            type: String,
            default: 'Спросить'
        }
    }
}
</script>

<style lang="scss" scoped>
.question-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 20px;
    padding: 30px 40px;
    border: 2px solid lightgray;
    border-radius: 20px;
    &__title {
        color: #000;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }

    &__text {
        color: #383838;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }

    &__button {}
}
</style>