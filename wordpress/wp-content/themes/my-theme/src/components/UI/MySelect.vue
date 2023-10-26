<template>
    <div class="select-box">
        <button @click="setOptionShow" class="select">
            <p class="select__title"> {{ currentOption ? currentOption[label] : title }} </p>
            <div ref="select-arrow" class="select-arrow">
                <img class="select-arrow__image" :src="$store.state.app.settings_select_icon" alt="some-select-image">
            </div>
        </button>
        <TransitionGroup appear v-if="isOptionsShowComputed" class="select-options" name="select-options" tag="ul">
            <button @click="setParentOptionToParent" v-if="parentOption" key="0" class="parent-node-box">
                <img class="parent-node-box__image" :src="$store.state.app.settings_select_icon" alt="some-select-image">
                <p class="parent-node-box__title"> {{ parentOption ? parentOption[label] : '' }} </p>
            </button>
            <button @click="setParentOption(option, true)" v-for="option in outputOptions" key="option[trackByLabel]"
                class="select-options__option">
                <p> {{ option[label] }}</p>
                <button @click.stop @click="setParentOption(option)" v-if="option[childrenLabel]" class="select-arrow-group">
                    <img class="select-arrow-group__image" :src="$store.state.app.settings_select_icon" alt="some-select-image">
                </button>
            </button>
        </TransitionGroup>
    </div>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        title: {
            type: String,
            default: 'select'
        },
        options: {
            type: Array,
            required: true
        },
        currentOption: {
            required: true
        },
        label: {
            type: String,
            default: 'name'
        },
        childrenLabel: {
            type: String,
            default: 'children'
        },
        parentIdLabel: {
            type: String,
            default: 'parent'
        },
        trackByLabel: {
            type: String,
            default: 'id'
        }
    },
    data() {
        return {
            isOptionsShow: false,
            parentOption: null,
        }
    },
    computed: {
        outputOptions() {
            if (this.parentOption == null) {
                return this.options
            }
            return this.parentOption[this.childrenLabel]
        },
        isOptionsShowComputed() {
            if(this.$refs['select-arrow']){
                this.$refs['select-arrow'].style.transform = this.isOptionsShow ? 'rotate(180deg)' : 'rotate(0deg)'
            }
            return this.isOptionsShow
        }
    },
    methods: {
        setParentOption(option, isSkipChildrenCheck = false) {
            console.log(isSkipChildrenCheck)
            if (option[this.childrenLabel] == undefined) {
                this.parentOption = null;
                this.isOptionsShow = false;
                return this.$emit('update:currentOption', option)
            }
            if(isSkipChildrenCheck){
                this.parentOption = null;
                this.isOptionsShow = false;
                return this.$emit('update:currentOption', option)
            }
            this.parentOption = option
        },
        setOptionShow() {
            this.isOptionsShow = !this.isOptionsShow
        },
        setParentOptionToParent() {
            if (this.parentOption && this.parentOption[this.parentIdLabel] != 0) {
                this.parentOption = this.options.find(option => option[this.trackByLabel] == this.parentOption[this.parentIdLabel])
            } else {
                this.parentOption = null;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.select-arrow-group {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: white;
    &__image {
        transform: rotate(-90deg);
        padding-left: 2px;
        padding-bottom: 1px;
    }
}

.select-arrow {
    transition: all 0.3s ease;
}

.parent-node-box {
    padding-left: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 20px;

    &__image {
        transform: rotate(90deg);
    }
}

.select-options-enter-active,
.select-options-leave-active {
    transition: all 0.5s ease;
}

.select-options-enter-from,
.select-options-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.select-box {
    display: flex;
    flex-direction: column;
    position: relative;
}

.select {
    padding: 17px 40px;
    background-color: white;
    border-radius: 100px;

    display: flex;
    align-items: center;
    gap: 30px;

    width: max-content;

    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }
}

.select-arrow {
    &__image {}
}

.select-options {
    border-radius: 20px;
    border: 1px solid #CBC9C9;
    background: #FFF;
    padding: 22px 26px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    text-align: left;
    position: absolute;
    top: 70px;
    left: 0px;
    width: max-content;

    &__option {
        border-radius: 100px;
        background: #E7E7E7;
        padding: 18px 29px 18px 29px;
        color: #000;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        display: flex;
        gap: 30px;
        align-items: center;
    }

}
</style>