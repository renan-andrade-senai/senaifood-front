import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import http from '@/http'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

// router.beforeEach(async (to, from) => {
//   if (to.path !== "/login") {
//       const token = atob(localStorage.getItem("token") || '');
//       if (!token) {
//         return {path: "/login"}
//       }
//       try {
//           const response = await http.get('security/auth/validate/' + token);
//           if (response.status >= 400) {
//               return {path: "/login"}
//           }
//       } catch {
//           return {path: "/login"}
//       }
//   }
// })

export default router
