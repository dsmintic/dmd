<template>
    <section class="container">
      <article>
          <h1 class="fontbold"><router-link :to="{ name:'Recipe'}">Title 1</router-link></h1>
          <img src="../images/vine.png">
          <p class="textfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?</p>
      </article>
  
      <article>
          <h1 class="fontbold">Title 2</h1>
          <img src="../images/tradicionalne-hrvatske-salate.jpg">
          <p class="textfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?</p>
      </article>
  
      <article>
          <h1 class="fontbold">Title 3</h1>
          <img src="../images/odojak.jpg">
          <p class="textfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?</p>
      </article>
    </section>
  
  
    <section class="container">
      <article>
          <h1 class="fontbold">Title 4</h1>
  
          <p class="textfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?</p>
      </article>
  
      <article>
          <h1 class="fontbold">Title 5</h1>
  
          <p class="textfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?</p>
      </article>
  
      <article>
          <h1 class="fontbold">Title 6</h1>
  
          <p class="textfont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia officiis ad
            unde perspiciatis ratione. Voluptate commodi dignissimos distinctio. Animi in est eligendi corporis deleniti
            magnam qui ad culpa voluptate?</p>
      </article>
    </section>
  
  
  
  </template>


<style scoped>

.container {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.container article{
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  flex-basis: 33%;
}

.container article img{
  width: 100%;
  display: block;
}

.container article p{
  font-size: medium;
  background-color: #FFF6ED;
}


.fontbold {
  background-color:peachpuff;
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
