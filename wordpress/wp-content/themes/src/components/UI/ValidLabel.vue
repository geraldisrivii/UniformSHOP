<template>
    <Transition name="label">
        <p :class="{
            'label_danger': isntValid && !isValid,
            'label_success': isValid,
        }" class="label">{{ necessaryText }}</p>
    </Transition>
</template>

<script>
export default {
    name: 'valid-label',
    props: {
        isntValid: {
            type: Boolean,
            required: true
        },
        isValid: {
            type: Boolean,
            required: true
        },
        isntValidText: {
            type: String,
            required: true,
        },
        isValidText: {
            type: String,
            required: true,
        }
    },
    computed: {
        necessaryText() {
            if (this.isValid) {
                return this.isValidText
            }

            if (this.isntValid) {
                return this.isntValidText
            }

            return ''
        }
    }
}
</script>

<style lang="scss" scoped>
.label-enter-active,
.label-leave-active {
    transition: all 0.5s ease;
}

.label-enter-from,
.label-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.label {
    &_success {
        color: green;
    }

    &_danger {
        color: red;
    }
}
</style>