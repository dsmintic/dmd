<template>
    <section class="container">
  
      <article>
        <h1>Damir Šmintić</h1>
        <img src="../images/Damir_chefs.png">
      </article>
  
    </section>
  </template>
  
  <style scoped>
  .container {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
  }
  
  .container article {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    width: 33%;
    text-align: center;
  }
  
  .container article img {
    width: 50%;
    display: block;
    margin: auto;
    border: 2px solid black;
  }
  
  .container article p {
    font-size: 700;
  }
  
  .container a {
    margin: 0;
    padding: 0;
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