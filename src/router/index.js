import { createRouter, createWebHistory, useRoute } from 'vue-router'
import RecipesView from '../views/RecipesView.vue';
import RecipeView from '../views/RecipeView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path:'/', name:'Home', component:HomeView},
  { path:'/recipes', name:'Recipes', component:RecipesView},
  { path:'/recipe', name:'Recipe', component:RecipeView},
  


  { path: '/:pathMatch(.*)*', name: '404Error', component:PageNotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
