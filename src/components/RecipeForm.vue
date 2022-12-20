<script>

</script>

<template>

    <section class="container">
        <article>
            <h1 class="fontbold">Add your recipe</h1>
            <form id="formRecipe">
                <select class="inset" name="typeOfDish" id="typeOfDish">
                    <option value="">-- Please select type of dish --</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                </select>

                <p><label for="title">Title:</label> <input type="text" id="title"
                        placeholder="Please enter the name of the recipe" v-model="title"></p>

                <p><label for="summary">Summary:</label> <input type="text" id="summary"
                        placeholder="Please enter a summary of the recipe" v-model="summary"></p>

                <!-- Dennis - Ingredients adding + - -->

                <p><label for="title">Method:</label>
                <textarea class="textarea" placeholder="Please enter the cooking method" rows="20"></textarea>
                </p>


                <p><input type="submit" value="Add recipe"></p>
            </form>
        </article>
    </section>

</template>

<style scoped>
.container {
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* background-color: #FFF6ED; */
}

.container article {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  background-color: #FFF6ED;
  width: 1000px;
  /* flex-basis: 100%; */
}

.container article h1 {
  font-size: medium;
  background-color: #FFF6ED;
}

:focus-visible {
    outline-color: #FFBF86;
    outline-offset: 3px;
    border-color: #FFDAB9;
    border-style: solid;
}
#formRecipe input[type=text], #formRecipe textarea {
    width: 50%;
    background-color: #FFF6ED;
}
#formRecipe textarea {
    height: 200px;
    resize: none;
    border: 3px solid transparent;
    box-shadow: inset 0 1px 2px rgba(0,0,0,4);
    background-color: #FFF6ED;
    width: 100%;
}
.textareaLabel {
    vertical-align: top;
}
.error {
    background-color: #FDB9FF;
}
#formRecipe label {
    display: inline-block;
    width: 100px;
    text-align: right;
}

.inset {
   border: 3px solid transparent;
   /* border-bottom: 2px solid black;
   box-shadow: inset 2px 2px 2px grey, 0 -1px 1px white; */
   box-shadow: inset 0 1px 2px rgba(0,0,0,4);
   height: 25px;
   background-color: #FFF6ED;
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