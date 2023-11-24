<template>
    <modal-window :withCLoseButton="true" :withoutBackDrop="true" :isDialogShow="isShowstateDialog"
        @update:isDialogShow="$emit('update:isShowstateDialog', $event)">
        <div class="state-dialog-content">
            <img class="state-dialog-content__image" :src="imageSrc ?? $store.state.app.settings_warning_icon" alt="Иконка отмены">
            <div>
                <p class="state-dialog-content__title">{{ title }}</p>
                <p class="state-dialog-content__description">{{ text }}</p>
            </div>
        </div>
    </modal-window>
</template>

<script>
export default {
    name: 'state-dialog',
    props: {
        imageSrc: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        isShowstateDialog: {
            type: Boolean,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.state-dialog-content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-top: 10px;
    align-items: center;
    text-align: center;

    &__image {
        width: 100px;
        height: 100px;
    }

    &__title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 5px;
    }
}
</style>