<template>
    <section 
    v-bind:style="{ background: `linear-gradient(90deg, #000 0%, rgba(5, 5, 5, 0.90) 38.35%, rgba(8, 8, 8, 0.80) 57.68%, rgba(11, 11, 11, 0.70) 70.15%, rgba(81, 81, 81, 0.63) 83.89%, rgba(217, 217, 217, 0.00) 100%), url(${$store.state.page.first_section_background}) center / cover no-repeat`}" class="first-section"
    >
        <div class="container first-section-container">
            <h1 class="first-section-container__title">{{ $store.state.page.first_section_title }}</h1>
            <div class="first-section-description">
                <div class="first-section-description__line"></div>
                <p class="first-section-description__text">
                    {{ $store.state.page.first_section_text }}
                </p>
            </div>
            <button @click="$router.push({name: 'katalog'})" class="button button_around first-section-description__button">
                {{ $store.state.page.first_section_button_text }}
            </button>
        </div>
    </section>

<div>
    <form action="">
        <input type="text">
    </form>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.first-section {
    padding: 140px 0px;
    margin-bottom: 100px;
}

.first-section-container {
    &__title {
        color: #FFF;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 4.6px;
        text-transform: uppercase;
        margin-bottom: 50px;
        max-width: 500px;
    }
}

.first-section-description {
    max-width: 400px;

    &__line {
        height: 1px;
        width: 100%;
        background-color: white;
        margin-bottom: 10px;
    }

    &__text {
        color: white;
        margin-bottom: 40px;
    }

    &__button {}
}
</style>