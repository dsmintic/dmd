<script>
    export default {

    }
</script>

<template>
    <div class="topMenu">
        
            <router-link to="/">Home</router-link>
            <router-link to="/">Recipes</router-link>
            <router-link to="/">Cook Calculator</router-link>
            <router-link to="/">Video</router-link>
            <router-link to="/">Chefs</router-link>
            <router-link to="/" class="right">Sign in</router-link>

            <!-- <a href="https://brights.com/" class="right" target="_blank">Brights</a> -->
        
    </div>


</template>

<style>
.topMenu {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
    padding: 0;
}


.topMenu a {
    text-decoration: none;
    color: black;
    /* color: inherit; */
    padding: 10px 20px;
    display: inline-block;
}

.topMenu a.right {
    float: right;
}

.topMenu a:hover {
    background-color: whitesmoke;
    color: red;
    font-weight: bold;
}
</style>

