<template>
    <div class="resume">
        <div class="col-one">
            <h1>Education</h1>
            <p>Computer Systems Technology</p>
            <p>Saskatchewan Polytechnic, Regina, SK</p>
            <p>2020-2022</p>
            <p><br /></p>
            <p>Licensed Practical Nursing</p>
            <p>Great Plains College, Swift Current, SK</p>
            <p>2015-2017</p>
            <p><br /></p>
            <h1>Work Experience</h1>
            <p>Surgical LPN</p>
            <p>F.H. Wigmore Regional Hospital, Moose Jaw, SK</p>
            <p>2018-2020</p>
            <p><br /></p>
            <p>Long Term Care LPN</p>
            <p>Central Butte Regency Manor, Central Butte, SK</p>
            <p>2018-2020</p>
        </div>
        <div class="col-two">
            <div class="technologies">
                
                <div class="sub-col">
                    <h1 id="title">Technologies</h1>
                    <div class="technologies2">
                        <div class="sub-col-one">
                            
                            <h2>Front-End</h2>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>NodeJS</p>
                            <p>Express</p>
                            <p>React</p>
                            <p>VueJS</p>
                            <p><br /></p>
                            <h2>Back-End</h2>
                            <p>Java</p>
                            <p>C</p>
                            <p>C#</p>
                        </div>
                        <div class="sub-col-two">
                            <h2>Databases</h2>
                            <p>MS Access</p>
                            <p>MySQL</p>
                            <p>OracleSQL</p>
                            <p>SQLite</p>
                            <p><br /></p>
                            <h2>Mobile</h2>
                            <p>Java/Android Studio</p>
                            <p>Swift</p>
                            <p>Xamarin</p>
                            <p>SQLite</p>
                            <p><br /></p>
                            <h2>Cloud/Servers</h2>
                            <p>Linux</p>
                            <p>Microsoft Azure</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Resume'
}
</script>

<style scoped>
    .resume {
        display: flex;
        flex-direction: row;
        margin: 15vh 20vw;
    }
    p {
        margin: auto;
    }
    .col-two {
        display: flex;
        flex-direction: column;
    }
    .technologies {
        display: flex;
        flex-direction: row;
        margin: auto;
        text-align: center;
    }
    #title {
        margin: auto 15vw quto 15vw;
    }
    .technologies2 {
        display: flex;
        flex-direction: row;
        margin: auto;
    }
    .sub-col-one {
        margin: 0 5vw;
    }
    
</style>