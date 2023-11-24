export default {
    props: {
        rate: {
            type: Number
        }
    },
    computed: {
        inRate(){
            return 5 - this.rate;
        },
    }
}