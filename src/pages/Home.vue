<template>
    <div>
        <TestAnime />
    </div>
</template>

<script>
//import Carousel from '../components/Carousel.vue'
import TestAnime from '@/components/TestAnime.vue'
export default {
    name: 'Home',
    components: {
        TestAnime,
    }
}
</script>
<style scoped>
    #shrek {
        display: block;
        margin: auto;
        padding: 2vw;
    }
</style>
