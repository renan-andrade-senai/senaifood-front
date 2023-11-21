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
html, body {
  background-image: url('assets/variedade-plana-com-deliciosa-comida-brasileira.jpg');
}
</style>
