<template>
    <div style="position: relative; z-index: 201;" v-show="isDialogShow" class="add-review-dialog-box">
        <div class="add-review-dialog">
            <slot></slot>
        </div>
    </div>
    <button v-if="withCLoseButton" @click="$emit('update:isDialogShow', false)" class="close-button">
        <div class="close-button__line close-button__line_1"></div>
        <div class="close-button__line close-button__line_2"></div>
    </button>
    <Transition name="backdrop">
        <div v-if="isDialogShow" @click="$emit('update:isDialogShow', !isDialogShow)" class="add-review-dialog-backdrop"
            :class="{ 'add-review-dialog-backdrop_without-black': withoutBackDrop }">
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'modal-window',
    props: {
        isDialogShow: {
            type: Boolean,
            default: false
        },
        withoutBackDrop: {
            type: Boolean,
            default: false
        },
        withCLoseButton: {
            type: Boolean,
            default: false
        },
        width: {
            type: [String],
            default: null
        }
    },
}
</script>

<style lang="scss" scoped>
.backdrop-enter-active,
.backdrop-leave-active {
    transition: opacity 0.5s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
    opacity: 0;
}


.add-review-dialog-backdrop {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);

    &_without-black {
        background: transparent;
    }
}

.add-review-dialog {


    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.3);
    width: 600px;
    padding: 20px;
    min-height: 300px;
    z-index: 201;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
}
</style>