<template>
    <div v-anime="{ rotate: '1turn', backgroundColor: '#333333', duration: 60, loop: true }">
        <img id='shrek' src='https://cdn.vox-cdn.com/thumbor/qCfHPH_9Mw78vivDlVDMu7xYc78=/715x248:1689x721/920x613/filters:focal(972x299:1278x605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg' />
        <h1 class="hire">HIRE ME</h1>
    </div>
</template>

<script scoped>
export default {
    name: "TestAnime",
    data() {
        return {};
    },

//     mounted() {
//     const targets = this.$el;
//     this
//       .$anime
//       .timeline()
//       .add({
//         targets,
//         translateX: 250,
//         easing: 'easeOutExpo',
//       })
//       .add({
//         targets,
//         translateX: 250,
//         easing: 'easeOutExpo',
//       });
//   },
}
</script>
<style scoped>
    .hire {
        font-size: 48;
    }
</style>
