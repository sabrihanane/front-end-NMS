import { createRouter, createWebHistory } from 'vue-router';
import Node from './pages/Node.vue';
import Subnet from './pages/Subnet.vue';


const routes = [
  { path: '/', name: 'home' , component: Subnet },
  { path: '/node/:id/:route/:name/:description/:label/:posx/:posy', name: 'node', component: Node }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;