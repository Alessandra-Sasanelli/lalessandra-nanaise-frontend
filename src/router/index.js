import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {
  GALLERY,
  HOME, LALES_BLOG,
  NANAS_BLOG,
  PAST_EVENTS,
  SONG_LIST,
  UPCOMING_EVENTS
} from "@/router/PathsConstants.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME,
      name: 'home',
      component: HomeView,
    },
    {
      path: PAST_EVENTS,
      name: 'past_events',
      // component: () => import(''),
    },
    {
      path: SONG_LIST,
      name: 'song_list',
      // component: () => import(''),
    },
    {
      path: UPCOMING_EVENTS,
      name: 'upcoming_events',
      // component: () => import(''),
    },
    {
      path: GALLERY,
      name: 'gallery',
      // component: () => import(''),
    },
    {
      path: NANAS_BLOG,
      name: 'nanas_blog',
      // component: () => import(''),
    },
    {
      path: LALES_BLOG,
      name: 'lales_blog',
      // component: () => import(''),
    },
  ],
})

export default router
