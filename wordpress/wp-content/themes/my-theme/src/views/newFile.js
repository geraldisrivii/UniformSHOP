/* __placeholder__ */
export default (await import('vue')).defineComponent({
    props: {
        isDataLoaded: {
            type: Boolean,
        }
    },
    async beforeCreate() {
        // let pageData = (await WP.get('pages/164')).data;
        // this.$store.state.page = pageData.cfs;
        if (this.isDataLoaded == false) {
            this.$emit('update:isDataLoaded', !this.isDataLoaded);
        }
    },
});
