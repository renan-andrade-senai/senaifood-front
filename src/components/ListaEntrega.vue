<template>
<h1>lista de entregas (para teste)</h1>
  <br>
  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">pedidoId</th>
      <th scope="col">prazo</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="entrega in entregas">
      <th scope="row">{{ entrega.id }}</th>
      <td>{{entrega.pedidoId}}</td>
      <td>{{entrega.prazo}}</td>
    </tr>
  </tbody>
</table>
</template>

<script lang="ts">
import type Entrega from '@/interfaces/Entrega';

    import { defineComponent, type PropType } from 'vue';
    export default defineComponent({
        name: "ListaEntrega",
        props:{
            entregas: {
                type: Array as PropType<Entrega[]>,
                required: true
            }
        },
        emits: ["aoExcluirEntrega"]
    })
</script>


<style></style>