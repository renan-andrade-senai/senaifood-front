<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from "./components/NavMenu.vue";
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
