import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import http from '@/http'
import CadastrarRestaurante from '@/components/CadastrarRestaurante.vue'
import ListarCardapio from '@/components/ListarCardapio.vue'
import CadastrarCardapio from "@/components/CadastrarCardapio.vue"
import PageEntregador from '@/components/PageEntregador.vue'
import CadastroView from '@/views/CadastroView.vue'
import MostrarAvaliacaoEntregador from '@/components/MostrarAvaliacaoEntregador.vue'
import MostrarAvaliacaoRestaurante from '@/components/MostrarAvaliacaoRestaurante.vue'

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
      path: "/cadastrar-cliente",
      name: "cadastrarCliente",
      component: CadastroView
    },
    {
      path: "/cadastrar-entregador",
      name: "cadastrarEntregador",
      component: PageEntregador
    },
    {
      path: "/cardapio",
      name: "cardapio",
      component: ListarCardapio,
      beforeEnter: beforeRoute
    },
    {
      path: "/cadastrar-cardapio",
      name: "cadastrarCardapio",
      component: CadastrarCardapio,
      beforeEnter: beforeRoute
    },
    {
      path: '/mostrarAvaliacoesEntregador',
      name: 'mostrarAvaliacoesEntregador',
      component: MostrarAvaliacaoEntregador,
      beforeEnter: beforeRoute
    },
    {
      path: '/mostrarAvaliacoesRestaurante',
      name: 'mostrarAvaliacoesRestaurante',
      component: MostrarAvaliacaoRestaurante,
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
