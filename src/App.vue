<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from "./components/NavMenu.vue";
import { onMounted } from 'vue';
import http from './http';
import { useStore } from "./stores/appStore";

const store = useStore();
onMounted(async () => {
  const token = atob(localStorage.getItem("token") || '');
  if (token) {
    const response = await http.get(`/security/auth/usertoken?token=${token}`);
    localStorage.setItem("token", btoa(response.data.user.token));
    store.setarUsuario({usuario: response.data.user, data: response.data.dados});
  }
})
</script>

<template>
  <header>
    <NavMenu/>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
body {
  background-image: linear-gradient(to right,#d2474771,#d2474771), url('assets/variedade-plana-com-deliciosa-comida-brasileira.jpg');
  /* background: url('assets/variedade-plana-com-deliciosa-comida-brasileira.jpg'), linear-gradient(to right, #6DB3F2, #6DB3F2); */
}
</style>
