import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes de rota
import Home from '@/views/Home/Home.vue';
import About from '@/views/About/About.vue';
import TodoList from '@/views/TodoList/TodoList.vue'
import NotFound from '@/views/NotFound/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
