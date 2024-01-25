
<template>
    <main v-if="isDataLoaded">
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
    </main>
</template>

<script>
import FirstSection from '@/sections/main/first-section.vue';
import SecondSection from '@/sections/main/second-section.vue';
import ThirdSection from '@/sections/main/third-section.vue';

import WP from '@/axiosWP';
import FourthSection from '@/sections/main/fourth-section.vue';

export default {
    components: { FirstSection, SecondSection, ThirdSection, FourthSection },
    props: {
        isDataLoaded: {
            type: Boolean,
        }
    },
    async beforeCreate(){
        let pageData = (await WP.get('pages/158')).data;
        this.$store.state.page = pageData.cfs;

        if(this.isDataLoaded == false){
            this.$emit('update:isDataLoaded', !this.isDataLoaded)
        }

    }
}
</script>

<style lang="scss" scoped></style>