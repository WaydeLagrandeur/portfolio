<template>
    <div class="home-page">
        <img class="home-img" src="../assets/WaydeTaylor.jpg" />
        <div class="home-text">
            <h1>Wayde Lagrandeur</h1>
            <p>Front-End Jr. Developer based out of Regina, Saskatchewan, Wayde is a Computer Systems Technology student at Saskatchewan Polytechnic. Wayde will be graduating in June 2022. When he's 
                not making websites or bots, Wayde likes to play board games, DnD, piano, and golf.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style scoped>
    .home-page {
        display: flex;
        flex-direction: column;
    }
    .home-img {
        max-height: 75vh;
        max-width: 40vh;
        margin: 15vh auto 0 auto;
        box-shadow: 5px 10px rgba(0,0,0,0.5);
    }
    .home-text {
        margin: 5vh 25vw 0 25vw; 
        text-align: center;
    }
</style>
