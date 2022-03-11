<template>
    <div>
        <div class="project">
            <h1 class="project-name">Christian Server Bot</h1>
            <img :src="'@/assets/CSB.PNG'" alt="Christian Server Bot" />
            <p></p>
        </div>
        <div class="project">
            <h1 class="project-name">Spam Test Bot</h1>
            <img :src="'@/assets/CSB.PNG'" alt="Spam Bot" />
            <p>Project TestSpamBot was created as a way to test blah blah</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resume'
}
</script>

<style scoped>
    .project {
        text-align: center;
        margin: 24vh auto;
    }
    .project-name {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 48px;
    }
</style>