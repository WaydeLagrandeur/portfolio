<template>
    <div>
        <!-- <div class="project">
            <h1 class="project-name">Christian Server Bot</h1>
            <img :src="'@/assets/CSB.PNG'" alt="Christian Server Bot" />
            <p></p>
        </div>
        <div class="project">
            <h1 class="project-name">Spam Test Bot</h1>
            <img :src="'@/assets/CSB.PNG'" alt="Spam Bot" />
            <p>Project TestSpamBot was created as a way to test blah blah</p>
        </div> -->
        <!-- <Project projectName="Christian Server Bot" projectDesc="A tongue-in-cheek Discord Bot" projectImg="../assets/CSB.png" />
        <Project projectName="Spam Test Bot" projectDesc="A bot made to test the anti-spamming abilities of consenting websites" projectImg="'../assets/CSB.png'" />
        <Project projectName="DuesyTech.com" projectDesc="A tech support service where users can hire freelance technicians" projectImg="'../assets/CSB.png'" />
        <Project projectName="Command Line Battleship" projectDesc="A school project made in Swift" projectImg="'../assets/CSB.png'" /> -->

        <div class="project">
            <h1 class="project-name">Spam Test Bot</h1>
            <img class="project-img" src="../assets/SpamBot.png" />
            <p>A bot made to test the anti-spamming abilities of consenting websites</p>
        </div>
        <div class="project">
            <h1 class="project-name">Christian Server Bot</h1>
            <img class="project-img" src="../assets/CSB.png" />
            <p>A tongue-in-cheek Discord Bot</p>
        </div>
        <div class="project">
                <h1 class="project-name">This Website</h1>
                <img class="project-img" src="../assets/AboutPage.png" />
                <p>Developed using VueJS, Node, and hosted independently</p>
        </div>
        <div class="project">
                <h1 class="project-name">DuesyTech.com</h1>
                <img class="project-img" src="../assets/dtech.png" />
                <p>A tech support service where users can hire freelance technicians</p>
        </div>
        <div class="project">
                <h1 class="project-name">Command Line Battleship</h1>
                <img class="project-img" src="../assets/bship.png" />
                <p>A school project made in Swift</p>
        </div>

        </div>
</template>

<script>
//import Project from '../components/Project.vue'

export default {
    name: 'Resume',
    // components: {
    //     Project
    // }
}
</script>

<style scoped>
    .project {
        text-align: center;
        margin: 18vh auto 18vh auto;
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
