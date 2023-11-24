<template>
    <div class="right-dialog-box">
        <div class="right-dialog">
            <button @click="$emit('update:isRightDialogShow', false)" class="right-dialog__close-button close-button">
                <div class="close-button__line close-button__line_1"></div>
                <div class="close-button__line close-button__line_2"></div>
            </button> 
            <div class="right-dialog__container">
                <slot></slot>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    name: 'right-dialog',
    props: {
        isRightDialogShow: {
            type: Boolean,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
.right-dialog-box{
    position: relative;
}
.right-dialog {
    position: fixed;
    top: 0;
    right: 0;
    width: 85%;
    height: 100vh;
    background-color: #F4F4F4;
    z-index: 200;
    overflow-y: scroll;
    @media (max-width: 1100px) {
        width: 100%;
    }

    &__container {
        padding: 20px;
        padding-top: 100px;
    }

    &__close-button{
        left: 30px;
        top: 10px;
        position: absolute;
        div{
            background-color: black;
        }
    }
}
</style>