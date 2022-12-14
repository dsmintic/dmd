<script>
import HeaderMain from './components/HeaderMain.vue';


export default{
    data(){
        return{

            }
        
    },
    methods:{

            },
    components: {
    HeaderMain
}
}

</script>

<template>

  <header>
    <!-- logo, main navigation, sec/aux navigation, search -->
    <HeaderMain></HeaderMain>
  </header>

  <main>
    <router-view></router-view>
  </main>
 
  <footer>
    <!-- site map, sociall networks, legal stuff -->
    <p>&copy; 2022, DMD chefs</p>
  </footer>

</template>

<style>

</style>
