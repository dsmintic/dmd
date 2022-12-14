import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PageNotFoundView from '../views/PageNotFoundView.vue';

const routes = [
  { path:'/', name:'Home',  component:HomeView},
  


  { path: '/:pathMatch(.*)*', name: '404Error', component:PageNotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
