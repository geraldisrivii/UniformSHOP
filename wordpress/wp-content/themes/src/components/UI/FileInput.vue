<template>
    <div class="input-box">
        <input ref="input" @change="inputChange" style="display: none;" :multiple="isMultiple" type="file"
            :name="name + '[]'" />
        <button type="button" @click="inputOpen" class="button button_around">{{ buttonText }}</button>
        <div class="input-box-chosen-files">
            <div v-for="image in images" class="input-box-chosen-files-file">
                <img class="input-box-chosen-files-file__image" :src="image.src" :alt="image.name">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "file-input",
    props: {
        name: {
            type: String,
            required: true
        },
        isMultiple: {
            type: Boolean,
            default: false
        },
        buttonText: {
            type: String,
            default: "Добавить файл"
        },
        images: {
            type: [FileList, Array],
            required: true
        }
    },
    mounted() {

    },
    methods: {
        inputChange(event) {

            let files = event.target.files;
            for (const file of files) {
                file.src = URL.createObjectURL(file);
            }
            this.$emit('update:images', files);
        },
        inputOpen() {
            this.$refs.input.click();
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
}

.input-box-chosen-files {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, 150px);
    grid-template-rows: repeat(auto-fit, 150px);
    width: 100%;
}

.input-box-chosen-files-file {
    display: flex;
    flex-direction: column;
    width: 100%;

    overflow: hidden;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

}
</style>