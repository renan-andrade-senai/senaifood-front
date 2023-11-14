<script setup lang="ts">
</script>

<template>
  <div class="row">
    <main class="col-12 d-flex flex-column align-items-center justify-content-evenly">
      <p class="text-center h1 text-light">Senai Food</p>
      <RouterLink to="" class="btn btn-primary">Ainda não é cliente? Cadastre-se</RouterLink>
      <RouterLink to="/cadastrar-restaurante" class="btn btn-primary">Seja um restaurante parceiro</RouterLink>
      <RouterLink to="" class="btn btn-primary">Seja um entregador parceiro</RouterLink>
    </main>
  </div>
</template>

<style scoped>
main {
  height: 40vh;
  background-color: var(--cor-senai-food);
  > p {
    font-family: 'Knewave', sans-serif;
  }
}
</style>
