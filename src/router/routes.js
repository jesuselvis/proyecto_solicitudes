
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('components/About.vue') },
      { path: '/registrar', component: () => import('components/Form.vue') },
      { path: '/verSolicitudes', component: () => import('components/verSolicitudes.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  }
]

export default routes
