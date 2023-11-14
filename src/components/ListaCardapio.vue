<template>
   
   <table class="table">
         <thead>
             <tr>
                 <th scope="col">Id</th>
                 <th scope="col">Nome Produto</th>
                 <th scope="col">Descrição</th>
                 <th scope="col">Tempo Preparo</th>
                 <th scope="col">Preço</th>
                <!--<th> </th>-->
                <th scope="col">Excluir</th>
             </tr>
         </thead>
         <tbody>
             <tr v-for="cardapio in cardapios">
                 <th scope="row">{{ cardapio.idcardapio }}</th>
                 <td>{{ cardapio.nomeItem }}</td>
                 <td>{{ cardapio.descricao }}</td>
                 <td>{{ cardapio.tempoPreparo }}</td>
                 <td>{{ cardapio.preco }}</td>
             <!--<td> <img>   </td>-->
                 <td>
                     <button type="button" class="btn btn-danger" @click="$emit('aoExcluirCardapio', cardapio.idcardapio)">
                         <i class="fa-solid fa-trash"></i>
                     </button>
                    
                 </td>
             </tr>
             
         </tbody>
     </table>
   <Modal :produto="produto" />

   
 
 
 </template>
 
 <script lang="ts">
 
 import { defineComponent, type PropType } from 'vue';
 import type Cardapio from '../interfaces/Cardapio';
 import Modal from './Modal.vue';

 export default defineComponent({
     name: "ListaCardapio",
     props: {
         cardapios: {
             type: Array as PropType<Cardapio[]>,
             required: true
         }
     },
     data() {
         return {
            produto: { } as Cardapio
         }
     },
     emits: ["aoExcluirCardapio"],
     components: {
        Modal
     }
 })
 
 
 
 
 </script>
 <style>
 
 
 </style>