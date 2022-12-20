<script>
export default {

}
</script>

<template>
    <section class="container">
        <article>
            <img src="../images/dmd_logo.png" class="logoimage">
        </article>
    </section>

    <article class="socialmedia">
        <a href="https://hr-hr.facebook.com/" target="_blank"><font-awesome-icon class="icons" icon="fa-brands fa-facebook" /></a>
        <a href="https://www.instagram.com/" target="_blank"><font-awesome-icon class="icons" icon="fa-brands fa-instagram" /></a>
        <a href="https://www.tiktok.com/en/" target="_blank"><font-awesome-icon class="icons" icon="fa-brands fa-tiktok" /></a>
    </article>

    <article class="socialmedia">
        <P>CONTACT US</P>
    </article>

    <article class="socialmedia">
        <small>Copyright © 2022 DMD, Inc. or its subsidiaries and affiliates. All rights reserved.</small>
    </article>
    

</template>

<style scoped>
.container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border-top: 2px solid peachpuff;
}

.container article {
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
}

.socialmedia {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.socialmedia a {
    color: inherit
}

.socialmedia a:visited{
    color: inherit
}

.icons{
    margin-right: 10px;
    margin-left: 10px;
    font-size: 30px;
}
</style>