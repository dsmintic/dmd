import { createRouter, createWebHistory, useRoute } from 'vue-router';
import RecipesView from '../views/RecipesView.vue';
import RecipeView from '../views/RecipeView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';
import HomeView from '../views/HomeView.vue';
import VideoRecipesView from '../views/VideoRecipesView.vue';
import AddRecipeView from '../views/AddRecipeView.vue'
import AddCommentView from '../views/AddCommentView.vue'
import ChefsView from '../views/ChefsView.vue'

const routes = [
  { path:'/', name:'Home', component:HomeView},
  { path:'/recipes', name:'Recipes', component:RecipesView},
  { path:'/recipe', name:'Recipe', component:RecipeView},
  { path:'/video', name:'Video', component: VideoRecipesView},
  { path:'/addrecipe', name:'Add Recipe', component: AddRecipeView},
  { path:'/addcomment', name:'Add Comment', component: AddCommentView},
  { path:'/chefs', name:'Chefs', component: ChefsView},
  


  { path: '/:pathMatch(.*)*', name: '404Error', component:PageNotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
  
})

export default router;
