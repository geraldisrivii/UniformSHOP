<template>
    <div style="position: relative; z-index: 201;" v-show="isDialogShow" class="add-review-dialog-box">
        <div class="add-review-dialog">
            <slot></slot>
        </div>
    </div>
    <Transition name="backdrop">
        <div v-if="isDialogShow" @click="$emit('update:isDialogShow', !isDialogShow)" class="add-review-dialog-backdrop">
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
        }
    },
    mounted() {
        console.log('hello')
    }
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
}

.add-review-dialog {


    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
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