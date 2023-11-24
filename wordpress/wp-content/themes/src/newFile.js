import WP from '@/axiosWP';

export default (await import('vue')).defineComponent({
    data() {
        return {
            isSearchShow: false,
            isBasketShow: false,
            isDataLoaded: false,
            isAppLoaded: false,
            AppData: {},
            data: {},
        };
    },
    components: {
        MyHeader,
        MyFooter
    },
    methods: {
        updateIsDataLoaded(newValue) {
            this.isDataLoaded = newValue;
        },
        disablePreloader() {
            this.$refs.preloader.style.opacity = 0;

            setTimeout(() => {
                this.$refs.preloader.style.display = 'none';
            }, 1000);
        },
    },
    computed: {
        isAllDataLoaded() {
            if (this.isDataLoaded && this.isAppLoaded) {
                this.disablePreloader();
            }
            return this.isDataLoaded && this.isAppLoaded;
        }
    },
    async beforeCreate() {
        let AppData = await WP.get('settings').then(response => response.data);

        this.$store.commit('setApp', AppData.cfs);

        this.isAppLoaded = true;
    },
    async mounted() {
        let response = await WP.get('test', {
            withCredentials: true
        });
        console.log(response.data);


        let responseIsAuth = await WP.get('auth_route', {
            withCredentials: true
        });
        console.log(responseIsAuth.data);
    }
});
