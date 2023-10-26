<template>
    <div ref="paginate-box" :style="{ height: height }" class="product-box">
        <slot></slot>
        <div ref="paginate-wrapper" class="paginate-wrapper">
            <div style="height: 200px;"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product-review-box',
    props: {
        height: {
            type: String,
            default: '400px',
        }
    },
    mounted() {
        var options = {
            root: this.$refs['paginate-box'],
            rootMargin: '0px 0px 75px 0px',
            threshold: 0,
        };
        var callback =  (entries, observer) => {
            if(entries[0].isIntersecting) {
                this.$emit('paginate')
            }
        };
        var observer = new IntersectionObserver(callback, options);

        observer.observe(this.$refs['paginate-wrapper']);
    }
}
</script>

<style lang="scss" scoped>
.product-box {
    padding: 12px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: scroll;
}
.paginate-wrapper {
    height: 200px;
    width: 100%;
}
</style>