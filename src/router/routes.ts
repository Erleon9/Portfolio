import { RouteRecordRaw } from 'vue-router';
const titlePage = ' | Eros León';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: 'Home' + titlePage },
        component: () => import('pages/ToolBar/HomePage.vue'),
      },
      {
        path: '/acerca',
        name: 'Acerca',
        meta: { title: 'Acerca' + titlePage },
        component: () => import('pages/ToolBar/AboutPage.vue'),
      },
      {
        path: '/servicios',
        name: 'Servicios',
        meta: { title: 'Servicios' + titlePage },
        component: () => import('pages/ToolBar/ServicePage.vue'),
      },
      {
        path: '/portafolio',
        name: 'Portafolio',
        meta: { title: 'Portafolio' + titlePage },
        component: () => import('pages/ToolBar/PortfolioPage.vue'),
      },
      {
        path: '/contacto',
        name: 'Contacto',
        meta: { title: 'Contacto' + titlePage },
        component: () => import('pages/ToolBar/ConctactPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
