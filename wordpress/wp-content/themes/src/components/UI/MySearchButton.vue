<template>
    <button @click="$emit('update:isSearchShow', !isSearchShow)" class="header-left__search">
        <img :src="searchIconUrl" alt="basket_icon">
    </button>
</template>

<script>
export default {
    name: "my-search-button",
    props: {
        searchIconUrl: {
            type: String,
            required: true
        },
        isSearchShow: {
            type: Boolean,  
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>