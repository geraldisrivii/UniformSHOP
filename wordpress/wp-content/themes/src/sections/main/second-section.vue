<template>
    <section class="second-section container">
        <div class="second-section-header">
            <header-box :title="$store.state.page.second_section_title" class="second-section-header__header-box" />
            <button class="button second-section-header__button button_around">
                {{ $store.state.page.second_section_button_text }}
            </button>
        </div>
        <div class="second-section-diginities">
            <Diginity v-for="diginity in diginities" :key="diginity.id " class="second-section-diginities__item" :title="diginity.title.rendered" :text="diginity.content.rendered"></Diginity>
        </div>
    </section>
</template>

<script>
import Diginity from '@/components/Diginity.vue';

import WP from '@/axiosWP';

export default {
    components: {
        Diginity
    },
    data(){
        return{
            diginities: [],
        }
    },
    async mounted(){
        let diginities = (await WP.get('diginities')).data
        
        this.diginities = diginities;
    }
}
</script>

<style lang="scss" scoped>
.second-section {
    margin-bottom: 140px;
}

.second-section-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 120px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 60px;
    }
    &__header-box {}

    &__button {
        justify-self: flex-end;
    }
}
.second-section-diginities{
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 50px;
    column-gap: 30px;
    &__item{

    }
}
</style>