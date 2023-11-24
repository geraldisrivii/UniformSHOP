<template>
    <div :style="{ width: width, height: height }" class="props-slider">
        <button v-if="!isEnoughHeight" v-show="!isShow" @click="$emit('update:isShow')" class="props-slider__top">
            <p class="props-slider__title">{{ title }}</p>
        </button>
        <div ref="content" class="props-slider__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'props-slider',
    props: {
        title: {
            type: String,
            default: 'Показать больше',
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '100%',
        },
        isShow: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isEnoughHeight: true,
        }
    },
    mounted() {
        let childrenHeight = null;
        for (const child of this.$refs['content'].children) {
            childrenHeight += child.clientHeight;
        }

        childrenHeight += 120;

        if(childrenHeight > Number(this.height.slice(0, -2))){
            this.isEnoughHeight = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.props-slider {
    position: relative;
    overflow: hidden;
    transition: all .3s ease;
    // padding-bottom: 50px;

    &__top {
        position: absolute;
        bottom: 0;
        text-align: center;
        left: 0;
        height: 70px;
        width: 100%;
        z-index: 10;
        background: linear-gradient(180deg, rgba(205, 205, 205, 0.00) 0%, rgba(177, 175, 175, 0.45) 45.43%, #8A8A8A 100%);
        border-radius: 5px;
    }

    &__title {
        font-weight: 500;
        padding-top: 25px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
}
</style>