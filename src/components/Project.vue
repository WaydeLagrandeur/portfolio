<template>
    <div class="project">
            <h1 class="project-name">{{projectName}}</h1>
            <v-img class="project-img" :src="projectImg" />
            <p>{{projectDesc}}</p>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: {
        projectName: String,
        projectImg: String,
        projectDesc: String
    },
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    .project {
        text-align: center;
        margin: 12vh auto 18vh auto;
    }
    .project-name {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 48px;
    }
    .project-img {
        max-width: 70vw;
        max-height: 60vh;
    }
</style>