<template>
  <div class="card" style="width: 50rem; height: 40rem; left: 242px; background-color:var(--cor-senai-food);">
    <div class="card-body">
      <ListaRestaurantes/>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ListaRestaurantes from '../components/ListaRestaurantes.vue';

export default defineComponent({
  name: "Restaurante",
  components: {
    ListaRestaurantes
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