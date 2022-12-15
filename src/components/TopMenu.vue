<script>
export default {

}
</script>

<template>

    <section class="container">

        <div>
            <router-link to="/"><img src="../images/dmd_logo.png" class="logoimage"></router-link>
        </div>

        <div>
            <router-link to="/">Recipes</router-link>
            <router-link to="/">Cook Calculator</router-link>
            <router-link to="/">Video</router-link>
            <router-link to="/">Chefs</router-link>
        </div>

        <div>
            <router-link to="/">Sign in</router-link>
        </div>

    </section>


</template>

<style>
.container {
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3em;
}


.container a {
    text-decoration: none;
    color: black;
    padding: 10px 20px;
    display: inline-block;
}


.container a:hover {
    /* background-color: whitesmoke; */
    color: #FF9F68;
    opacity: 1;
    /* font-weight: bold; */
}

.logoimage {
    width: 125px;
    padding: 0;
    margin: 0;
}
</style>

