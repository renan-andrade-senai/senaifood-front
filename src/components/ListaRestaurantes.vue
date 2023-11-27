<template>
<h2 class="card-title mb-4" style="font-size: 40px; color: white; font-family: cursive;">Restaurantes</h2>
<ol class="list-group list-group-numbered">
  <li v-for="Restaurante in restaurantes" :key="Restaurante.idrestaurante" class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold"><RouterLink :to="`/cardapio-cliente/${Restaurante.idrestaurante}`">{{ Restaurante.nomeEstabelecimento }}</RouterLink></div>
    </div>
  </li>
</ol>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type Restaurante from '../interfaces/Restaurante';
import { listarRestaurantes } from '../http';

export default defineComponent({
    name: "ListaRestaurante",
    data() {
        return {
            restaurantes: [] as Restaurante[]
        };
    },
    async mounted() {
        const response = await listarRestaurantes();
        this.restaurantes = response!;
    },
}
)
</script>

<style></style>