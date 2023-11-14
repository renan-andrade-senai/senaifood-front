import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import http from '@/http'
import CadastrarRestaurante from '@/components/CadastrarRestaurante.vue'
import ListaCardapio from '@/components/ListaCardapio.vue'
import CadastrarCardapio from "@/components/CadastrarCardapio.vue"

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
      component: LoginView,
    },
    {
      path: "/cadastrar-restaurante",
      name: "cadastrarRestaurante",
      component: CadastrarRestaurante
    },
    {
      path: "/cardapio",
      name: "cardapio",
      component: ListaCardapio,
      beforeEnter: beforeRoute
    },
    {
      path: "/cadastrar-cardapio",
      name: "cadastrarCardapio",
      component: CadastrarCardapio,
      beforeEnter: beforeRoute
    }
  ]
})

async function beforeRoute(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  if (to.path !== "/login") {
    const token = atob(localStorage.getItem("token") || '');
    if (!token) {
      return {path: "/login"}
    }
    try {
        const response = await http.get('security/auth/validate?token=' + token);
        if (response.status >= 400) {
            return {path: "/login"}
        }
    } catch {
        return {path: "/login"}
    }
  }
}

// router.beforeEach(async (to, from) => {
//   if (to.path !== "/login") {
//       const token = atob(localStorage.getItem("token") || '');
//       if (!token) {
//         return {path: "/login"}
//       }
//       try {
//           const response = await http.get('security/auth/validate?token=' + token);
//           if (response.status >= 400) {
//               return {path: "/login"}
//           }
//       } catch {
//           return {path: "/login"}
//       }
//   }
// })

export default router
