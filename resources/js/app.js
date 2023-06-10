import './bootstrap';
import { createApp } from 'vue';
import App from '../views/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes.js';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
