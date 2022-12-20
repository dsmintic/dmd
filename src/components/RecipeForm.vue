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

                <!-- <p><label for="summary">Summary:</label> <input type="text" id="summary"
                        placeholder="Please enter a summary of the recipe" rows="10" v-model="summary"></p> -->

                <p><label for="title">Summary:</label>
                    <textarea class="textarea" placeholder="Please enter a summary of the recipe" rows="10"></textarea>
                </p>

                <!-- Dennis - Ingredients adding + - -->

                <p><label for="title">Method:</label>
                    <textarea class="textarea" placeholder="Please enter the cooking method" rows="50"></textarea>
                </p>

                <div class="container_buttons">
                    <input style="display:none" type="file" @change="onFileSelected" ref="fileInput">
                    <button class="myButton" @click="$refs.fileInput.click()">Pick recipe picture</button>
                </div>

                <div class="container_buttons">
                    <button class="myButton" type="submit" @click="onUpload">Upload</button>
                </div>

                <div class="container_buttons">
                    <p><input class="myButton" type="submit" value="Add recipe"></p>
                </div>


            </form>
        </article>
    </section>

</template>

<style scoped>
.container {
    overflow: hidden;
    display: flex;
    justify-content: center;

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

.container article p {
    font-size: medium;
}


:focus-visible {
    /* outline-color: #FFBF86; */
    outline-color: #B9DEFF;
    outline-offset: 3px;
    border-color: #FFDAB9;
    border-style: solid;
}

#formRecipe input[type=text],
#formRecipe textarea {
    width: 50%;
    background-color: white;
    height: 25px;
    border: transparent;
    box-shadow: inset 2px 2px 2px grey, 0 -1px 1px white;
    vertical-align: top;
}

#formRecipe textarea {
    height: 200px;
    resize: none;
    border: 3px solid transparent;
    /* box-shadow: inset 0 1px 2px rgba(0, 0, 0, 4); */
    box-shadow: inset 2px 2px 2px grey, 0 -1px 1px white;
    background-color: white;
    width: 80%;
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
    /* border: 3px solid transparent;
   box-shadow: inset 0 1px 2px rgba(0,0,0,4); */
    /* border-bottom: 1px solid black; */
    outline-color: #B9DEFF;
    box-shadow: inset 2px 2px 2px grey, 0 -1px 1px white;
    width: 220px;
    height: 30px;
    text-align: center;
    background-color: white;
    margin-left: 104px;
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

.container_buttons {
    overflow: hidden;
    display: flex;
    justify-content:center;
    padding-bottom: 10px;
    margin-bottom: 0;
}

.myButton {
    box-shadow: 0px 10px 14px -7px #276873;
    margin-top: 5px;
    background-color: #B9DEFF;
    border-radius: 8px;
    cursor: pointer;
    color: black;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 20px;
    text-decoration: none;
    border: none;
}

.myButton:hover {
    background-color: #FFDAB9;
    color: white;
}

.myButton:active {
    position: relative;
    top: 2px;
}
</style>