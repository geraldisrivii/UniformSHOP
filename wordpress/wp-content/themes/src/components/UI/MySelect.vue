<template>
    <div class="select-box">
        <button @keydown.space.stop="isOptionsShow = false"
            :class="{ 'select_border': isHasBorder, 'select_full-container': isWidthFullContainer }" @click="setOptionShow"
            class="select">
            <input @input="(event) => this.inputValue = event.target.value"
                class="select__input" :value="inputValueComputed" :placeholder="title" v-if="isSearheble" type="text">
            <p v-else class="select__title"> {{ currentOption ? currentOption[label] : title }} </p>
            <div ref="select-arrow" class="select-arrow">
                <img class="select-arrow__image" :src="$store.state.app.settings_select_icon" alt="some-select-image">
            </div>
        </button>
        <TransitionGroup appear v-if="isOptionsShowComputed" class="select-options" name="select-options" tag="ul">
            <button @click="setParentOptionToParent" v-if="parentOption" key="0" class="parent-node-box">
                <img class="parent-node-box__image" :src="$store.state.app.settings_select_icon" alt="some-select-image">
                <p class="parent-node-box__title"> {{ parentOption ? parentOption[label] : '' }} </p>
            </button>
            <button @click="setParentOption(option, true)"
                v-for="option in isSearheble ? outputSearchOptions : outputOptions" key="option[trackByLabel]"
                class="select-options__option">
                <p> {{ option[label] }}</p>
                <button @click.stop @click="setParentOption(option)" v-if="option[childrenLabel]"
                    class="select-arrow-group">
                    <img class="select-arrow-group__image" :src="$store.state.app.settings_select_icon"
                        alt="some-select-image">
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
        },
        isHasBorder: {
            type: Boolean,
            default: false
        },
        isWidthFullContainer: {
            type: Boolean,
            default: false
        },
        isSearheble: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isOptionsShow: false,
            parentOption: null,
            inputValue: '',
        }
    },
    computed: {
        outputOptions() {
            if (this.parentOption == null) {
                return this.options
            }
            return this.parentOption[this.childrenLabel]
        },
        outputSearchOptions() {
            let regexps = [];
            for (const word of this.inputValue.trim().split(' ')) {
                regexps.push(new RegExp(word, 'g'));
            }
            let filteredOutputSearchOptions = this.outputOptions.filter(option => {
                for (const regexp of regexps) {
                    if (option.name.match(regexp) != null) {
                        return true;
                    }
                }
                return false;
            })
            let sortedOutputSearchOptions = filteredOutputSearchOptions.sort((first, second) => {
                let sum = 0;
                for (const regexp of regexps) {
                    sum += (second.name.match(regexp) ? second.name.match(regexp).length : 0) - (first.name.match(regexp) ? first.name.match(regexp).length : 0)
                }
                return sum;
            })
            return sortedOutputSearchOptions
        },
        isOptionsShowComputed() {
            if (this.$refs['select-arrow']) {
                this.$refs['select-arrow'].style.transform = this.isOptionsShow ? 'rotate(180deg)' : 'rotate(0deg)'
            }
            return this.isOptionsShow
        },
        inputValueComputed() {
            return this.currentOption ? this.currentOption[this.label] : this.inputValue
        }
    },
    methods: {
        setParentOption(option, isSkipChildrenCheck = false) {
            if (option[this.childrenLabel] == undefined) {
                this.parentOption = null;
                this.isOptionsShow = false;
                return this.$emit('update:currentOption', option)
            }
            if (isSkipChildrenCheck) {
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

    &_border {
        border: 2px solid rgb(231, 231, 231);
    }

    &_full-container {
        width: 100%;
        justify-content: space-between;
    }

    &__title {
        color: #000;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
    }

    &__input {
        font-size: 18px;
        font-weight: 500;
        width: 100%;

        &::placeholder {
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 400;
            color: rgb(104, 104, 104);
        }
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