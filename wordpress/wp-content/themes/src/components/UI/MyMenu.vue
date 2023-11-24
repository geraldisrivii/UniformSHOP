<template>
    <div :class="{'menu_fill': isFiil}" class="menu">
        <button :class="{ 'menu__item--active': currentValue.value === button.value }" @click="$emit('update:currentValue', button)" v-for="(button, index) in buttons" key="index"
            class="button menu__item button_around button_gray">
            {{ button.label }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'my-menu',
    props: {
        buttons: {
            type: Array,
        },
        currentValue: {
            type: Object,
        },
        isFiil: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/variables';
.menu {
    padding: 26px 22px;
    border-radius: 20px;
    border: 2px solid lightgray;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__item {
        &--active {
            background-color: $accent-color;
            color: white;
        }
    }
    &_fill{
        border: none;
        background-color: white;
    }
}

</style>