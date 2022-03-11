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
        <Project projectName="Christian Server Bot" projectDesc="A tongue-in-cheek Discord Bot" />
        <Project projectName="Spam Test Bot" projectDesc="A bot made to test the anti-spamming abilities of consenting websites" />
        <Project projectName="DuesyTech.com" projectDesc="A tech support service where users can hire freelance technicians" />
        <Project projectName="Command Line Battleship" projectDesc="A school project made in Swift" />

    </div>
</template>

<script>
import Project from '../components/Project.vue'

export default {
    name: 'Resume',
    components: {
        Project
    }
}
</script>
