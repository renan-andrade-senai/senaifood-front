<template>
  <div>
<h1 style="color: white;background-color: rgb(172, 50, 50);">Lista de entregas pendentes</h1>
  <br>
  <table   class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">pedidoId</th>
      <th scope="col">prazo</th>
      <th scope="col">entregar</th>
      <th scope="col">excluir</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="entrega in entregas">
      <template  v-if="entrega.entregador ===null">
      <th scope="row">{{ entrega.id }}</th>
      <td>{{entrega.pedidoId}}</td>
      <td>{{entrega.prazo}}</td>
      <td  v-if="!entrega.entregador">
        <button class="btn" type="button" style="background-color: yellow;" @click="$emit('aoEntregarEntrega', entrega)">
        <i class="fa-solid fa-motorcycle"></i>
      </button></td>
      <td v-else></td>
      <td> <button type="button" class="btn btn-danger" @click="$emit('aoExcluirEntrega', entrega.id)">
        <i class="fa-solid fa-trash-can"></i>
      </button></td>
    </template>
      
    </tr>
  </tbody>
</table>
</div>
<div>
<h1 style="color: white;background-color: rgb(172, 50, 50);">Lista de entregas concluídas</h1>
  <br>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">pedidoId</th>
      <th scope="col">prazo</th>
      <th scope="col">entregue</th>
      <th scope="col">excluir</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="entrega in entregas" class="table-success">
      <template  v-if="entrega.entregador !==null">
      <th  scope="row">{{ entrega.id }}</th>
      <td>{{entrega.pedidoId}}</td>
      <td>{{entrega.prazo}}</td>
      <td>Entregue</td>
      <td> <button type="button" class="btn btn-danger" @click="$emit('aoExcluirEntrega', entrega.id)">
        <i class="fa-solid fa-trash-can"></i>
      </button></td>
    </template>
      
    </tr>
  </tbody>
</table>
</div>
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
        emits: ["aoExcluirEntrega", "aoEntregarEntrega"]
    })
</script>


<style></style>