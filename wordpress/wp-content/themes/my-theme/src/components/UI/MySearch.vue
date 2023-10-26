<template>
    <div class="search">
        <input :value="text" @input="$emit('update:text', $event.target.value)" :placeholder="placeholder" type="text"
            class="search__field">
        <img class="search__img" :src="$store.state.app.header_search_img" alt="header-img">
    </div>
</template>

<script>
export default {
    name: 'my-search',
    props: {
        placeholder: {
            type: String,
            default: 'Поиск'
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    border-radius: 100px;
    background: #FFF;
    padding: 12px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 400px;
    @media (max-width: 1000px) {
        min-width: auto;
    }

    &__field {
        font-size: 18px;
        border: none;
        outline: none;
        width: 90%;

        &::placeholder {
            color: #000;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: uppercase;
        }
    }

    &__img {}
}
</style>