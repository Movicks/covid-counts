import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupAuth from '@/auths/SignupAuth.vue'
import LoginAuth from '@/auths/LoginAuth.vue'
import PostsView from '@/views/PostsView.vue'
import PostDetailsView from "@/views/PostDetailsView.vue"
import EditPost from '@/views/EditPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: SignupAuth,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginAuth,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/post/:id',
      component: PostDetailsView,
    },
    { path: '/edit/:id',
      component: EditPost,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
