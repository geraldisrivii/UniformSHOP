<template>
    <a :href="link" class="social-link">
        <img class="social-link__image" :src="imageSrc" :alt="alt">
    </a>
</template>

<script>
    export default {
        name: 'social-link',
        props: {
            imageSrc: {
                type: String,
                required: true
            },
            alt:{
                type: String,
                required: false
            },
            link: {
                required: true,
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
.social-link{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    background-color: #003D99;
    border-radius: 100%;
    &__image{
        width: 28px;
    }
}
</style>