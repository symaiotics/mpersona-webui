import { createRouter, createWebHistory } from 'vue-router'

import { useTokens } from '@/composables/useTokens';
let { tokenDecoded } = useTokens();

const routes = [

  // Document title tag
  // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
  {
    meta: {
      title: 'mPersona'
    },
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },

  
  {
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard_tableau-de-bord',
    name: 'dashboard',
    component: () => import('@/views/DashboardView.vue')
  },

  {
    meta: {
      title: 'Chat'
    },
    path: '/chat_discuter/:personaId?',
    name: 'chat',
    props: true,
    component: () => import('@/views/mPersona/Chat.vue')
  },

  {
    meta: {
      title: 'Select style'
    },
    path: '/style',
    name: 'style',
    component: () => import('@/views/StyleView.vue')
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/TablesView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile_profil',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login_connecter',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

//Apply security 
router.beforeEach((to, from, next) => {
  if (to.name === 'dashboard' && !tokenDecoded?.value?.username) {
    // If trying to access dashboard without a valid token, redirect to login
    next({ name: 'login' })
  } else {
    // Otherwise, proceed as normal
    next()
  }
})


export default router
