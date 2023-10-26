<template>
    <section
        v-bind:style="{ background: `linear-gradient(90deg, #000 0%, rgba(5, 5, 5, 0.90) 38.35%, rgba(8, 8, 8, 0.80) 57.68%, rgba(11, 11, 11, 0.70) 70.15%, rgba(81, 81, 81, 0.63) 83.89%, rgba(217, 217, 217, 0.00) 100%), url(${$store.state.page.first_section_background}) center / cover no-repeat` }"
        class="first-section">
        <div class="container first-section-container">
            <div class="first-section-container-grid">
                <div class="first-section-container-left-section">
                    <h1 class="first-section-container__title">{{ $store.state.page.first_section_title }}</h1>
                    <div class="first-section-description">
                        <p class="first-section-description__text">
                            {{ $store.state.page.first_section_text }}
                        </p>
                    </div>
                </div>
                <button class="button button_around button_gray first-section-description__button">
                    {{ $store.state.page.first_section_button_text }}
                </button>
            </div>
            <div class="filter-box first-section-filter-box">
                <my-select class="first-section-filter-box__category"
                    @update:currentOption="(newValue) => $emit('update:selectedCategory',newValue)" :currentOption="selectedCategory"
                    :options="categories" :title="'Категория'">
                </my-select>
                <my-search class="first-section-filter-box__search" :text="searchText"
                    @update:text="(newValue) => $emit('update:searchText', newValue)" />
                <my-select class="first-section-filter-box__sort" @update:currentOption="(newValue) => $emit('update:selectedSortOption', newValue)"
                    :currentOption="selectedSortOption" :options="sortOptions" :title="'Сортировка'">
                </my-select>
            </div>
        </div>
    </section>
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex'


export default {
    components: {

    },
    computed: {
        ...mapState({
            categories: state => state.katalog.categories,
            selectedCategory: state => state.katalog.selectedCategory,
            sortOptions: state => state.katalog.sortOptions,
            selectedSortOption: state => state.katalog.selectedSortOption,
            searchText: state => state.katalog.searchText
        })
    },
    methods: {
        ...mapActions({
            getCategories: 'katalog/getCategories',
        }),
    },
    async mounted() {
        await this.getCategories();
    },
}
</script>


<style lang="scss" scoped>
.filter-box {}

.first-section-filter-box {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    &__category {
        width: max-content;
    }

    &__search {
        width: max-content;
    }

    &__sort {
        width: max-content;
    }
}


.first-section {
    padding: 140px 0px;
    // margin-bottom: 100px;
}

.first-section-container-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 0px;
    }

    gap: 100px;
    justify-items: flex-start;
    align-items: flex-start;
    margin-bottom: 60px;
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
    }
}

.first-section-description {
    max-width: 500px;

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