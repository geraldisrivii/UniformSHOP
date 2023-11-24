<template>
    <footer class="footer">
        <div class="footer-content container">
            <p class="footer-content__title">{{ $store.state.app.footer_logo }}</p>
            <div class="footer-content-socials">
                <social-link :link="social.link" v-for="social in  $store.state.app.footer_socials" :imageSrc="social.icon"></social-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    padding-top: 100px;
    padding-bottom: 130px;
    background-color: white;
}

.footer-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    &__title {
        color: #003D99;
        text-align: center;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }
}

.container {}

.footer-content-socials {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>