<template>
    <section class="container">
       

        <article>

        <div class="picture">Damir Šmintić
         <img src="../images/Damir_chefs.png">
          
        </div></article>
       

        <article>
        <div class="picture">Marija Mamić
          <img src="../images/Marija_chefs.png">
        </div></article>
          
        
       <article>
      <div class="picture">Denis Križak
          <img  src="../images/Denis_chefs.png">
          
      </div></article>
     


    </section>
</template>

<style scoped>
.container {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.container a{
    margin: 0;
    padding: 0;
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

.picture {
    height: auto;
    width: f-content;
}

</style>