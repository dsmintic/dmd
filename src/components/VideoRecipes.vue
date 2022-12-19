<template>
    <!-- <h1 class="fontbold"><router-link :to="{ name: 'Video' }">Find your recipe in this video</router-link></h1> -->

    <section class="container">
        <article>
            <h4 class="fontbold">Video 1</h4>
            <video width="400" controls>
                <source src="../video/Color egg.mp4" type="video/mp4">
            </video>
            <p class="textfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam veniam a,
                cumque, excepturi non
                exercitationem temporibus maiores ipsam quod provident recusandae quos, eligendi ea saepe suscipit rerum
                ipsa sapiente?</p>
        </article>     
    
        <article>
            <h4 class="fontbold">Video 2</h4>
            <video  width="400" controls >
                <source src="../video/all cakes.mp4" type="video/mp4">
            </video>
            <p class="textfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam veniam a,
                cumque, excepturi non
                exercitationem temporibus maiores ipsam quod provident recusandae quos, eligendi ea saepe suscipit rerum
                ipsa sapiente?</p>
        </article>

        <article>
            <h4 class="fontbold">Video 3</h4>
        <video width="400" controls >
                <source src="../video/Tiramisu dessert cups.mp4" type="video/mp4">
            </video>
            <p class="textfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam veniam a,
                cumque, excepturi non
                exercitationem temporibus maiores ipsam quod provident recusandae quos, eligendi ea saepe suscipit rerum
                ipsa sapiente?</p>
        </article>  
    </section>

    <section class="container">
        <article>
            <h4 class="fontbold">Video 4</h4>
            <video width="400" controls>
                <source src="../video/Fruit Dessert cups.mp4" type="video/mp4">
            </video>
            <p class="textfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam veniam a,
                cumque, excepturi non
                exercitationem temporibus maiores ipsam quod provident recusandae quos, eligendi ea saepe suscipit rerum
                ipsa sapiente?</p>
        </article>     
    
        <article>
            <h4 class="fontbold">Video 5</h4>
            <video  width="400" controls >
                <source src="../video/all cakes.mp4" type="video/mp4">
            </video>
            <p class="textfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam veniam a,
                cumque, excepturi non
                exercitationem temporibus maiores ipsam quod provident recusandae quos, eligendi ea saepe suscipit rerum
                ipsa sapiente?</p>
        </article>

        <article>
            <h4 class="fontbold">Video 6</h4>
        <video width="400" controls >
                <source src="../video/allRecipes.mp4" type="video/mp4">
            </video>
            <p class="textfont">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quam veniam a,
                cumque, excepturi non
                exercitationem temporibus maiores ipsam quod provident recusandae quos, eligendi ea saepe suscipit rerum
                ipsa sapiente?</p>
        </article>  
    </section>




</template>

<style scoped>
.container {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items:flex-start;
}

.container article {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    flex-basis: 50%;
}

.fontbold {
    background-color: peachpuff;
    padding: 20px;
    font-weight: 700;
    margin: 0;
}

.textfont {
    font-weight: 100;
    padding: 10px;
    margin: 0;
}
</style>