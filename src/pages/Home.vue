<template>
    <div>
        <h1>Hello World!</h1>
        <Carousel />
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
    name: 'Home',
    components: {
        Carousel,
    }
}
</script>