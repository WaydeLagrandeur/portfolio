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
        flex-direction: row;
    }
    .home-img {
        max-height: 75vh;
        margin: 15vh 5vw 0 15vw;
        box-shadow: 5px 10px rgba(0,0,0,0.5);
    }
    .home-text {
        margin: 40vh 20vw 0 8vw; 
        text-align: center;
    }
</style>
