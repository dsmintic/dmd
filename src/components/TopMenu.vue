<script>
    export default {

    }
</script>

<template>
    <nav class="topMenu">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Recipes</router-link></li>
            <li><router-link to="/">Cook Calculator</router-link></li>
            <li><router-link to="/">Video</router-link></li>
            <li><router-link to="/">Chefs</router-link></li>

            <li><router-link to="/">Sign in</router-link></li>
            

        

           <!-- <li><a href="https://brights.com/" target="_blank">Brights</a></li>-->
        </ul>
    </nav>
</template>

<style>
.topMenu {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    box-shadow: 0px 3px 5px #000;
}
.topMenu li {
    display: inline;
}
.topMenu a {
    text-decoration: none;
    color: black;
    /* color: inherit; */
    padding: 10px 20px;
    display: inline-block;
}

.topMenu a:hover {
    background-color: white;
    color: lightpink;
}
</style>

