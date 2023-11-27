<template>
  <div class="card" style="width: 50rem; height: 40rem; left: 242px; background-color:var(--cor-senai-food);">
    <div class="card-body">
      <ListaItens/>
    </div>
  </div>
  
</template>

<script lang="ts">

import ListaItens from '../components/ListaItens.vue';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: "Carrinho",
  components: {
    ListaItens
  }
})
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin-top: 5px;
}

.title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
}
</style>