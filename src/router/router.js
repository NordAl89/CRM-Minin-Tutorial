import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/detailrecord',
    name: 'Detailrecord',
    meta: {layout: 'main'},
    component: () => import('../pages/DetailRecord.vue')
  },
  {
    path: '/catigories',
    name: 'Catigories',
    meta: {layout: 'main'},
    component: () => import('../pages/CategoriesPage.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'main'},
    component: () => import('../pages/HistoryPage.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: {layout: 'main'},
    component: () => import('../pages/PlanningPage.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main'},
    component: () => import('../pages/ProfilePage.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: {layout: 'main'},
    component: () => import('../pages/RecordPage.vue')
  },
    // layouts second

  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'second'},
    component: () => import('../pages/LoginPage.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout: 'second'},
    component: () => import('../pages/RegistratePage.vue')
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;