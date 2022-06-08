import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import SliderImages from '../views/SliderImages.vue'
import TodoList from "../views/TodoList.vue";
import ContactUs from "../views/ContactUs.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/image-slider',
    name: 'image-slider',
    component: SliderImages,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/to-do-list',
    name: 'to-do-list',
    component: TodoList,
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
