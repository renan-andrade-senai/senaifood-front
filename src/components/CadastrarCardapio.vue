<template>
    <form @submit.prevent="salvarCardapio">
       <div class="card" style="background-color: brown;">
         <div class="card-body">
           <div class="mb-3">
             <label for="nomeItem" class="form-label">Nome do Item</label>
             <input type="text" class="form-control" id="nomeItem" v-model="cardapio.nomeItem">
           </div>
           <div class="mb-3">
             <label for="descricao" class="form-label">Descrição</label>
             <input type="text" class="form-control" id="descricao" v-model="cardapio.descricao">
           </div>
           <div class="mb-3">
             <label for="preco" class="form-label">Preço</label>
             <input type="number" class="form-control" id="preco" v-model="cardapio.preco">
           </div>
           <div class="mb-3">
             <label for="tempoPreparo" class="form-label">Tempo de Preparo (em minutos)</label>
             <input type="number" class="form-control" id="tempoPreparo" v-model="cardapio.tempoPreparo">
           </div>
           <div class="mb-3">
             <label for="caminhoFoto" class="form-label">Caminho da Foto</label>
             <input type="text" class="form-control" id="caminhoFoto" v-model="cardapio.caminhoFoto">
           </div>
           <button type="submit" class="btn btn-primary">{{descricaoBotao}}</button>
         </div>
       </div>
    </form>
   </template>
   
   <script lang="ts">
   import { computed, defineComponent } from 'vue';
   import http from '@/http';
   import type Cardapio from '@/interfaces/Cardapio';
import { useStore } from '@/stores/appStore';
import type Restaurante from '@/interfaces/Restaurante';
   
   export default defineComponent({
    name: 'Cardapio',
    data() {
       return {
         cardapio: {} as Cardapio,
       }
    },
    methods: {
       async cadastrarCardapio() {
         this.cardapio.restauranteDTO = this.restaurante;
         await http.post("/restaurante/cardapio", this.cardapio);
         this.$emit("aoSalvarCardapio");
       },
       async alterarCardapio() {
         this.cardapio.restauranteDTO = this.restaurante;
         await http.put("/restaurante/cardapio", this.cardapio)
         this.$emit("aoAlterarCardapio");
       },
       salvarCardapio() {
         if (this.$route.path == "/editarcardapio") {
           this.alterarCardapio()
         } else {
           this.cadastrarCardapio()
         }
       }
    },
    emits: ["aoSalvarCardapio", "aoAlterarCardapio"],
    computed: {
       descricaoBotao() {
         if (this.$route.path == "/editarcardapio") {
           return "Alterar Cardápio"
         } else {
           return "Cadastrar"
      
          }
        },
    },
    setup() {
      const store = useStore();
      const restaurante = computed(() => store.dados as Restaurante);
      return {
        restaurante
      }
    }
})
   </script>
   
   <style scoped>
   .card {
    border-radius: 0%;
   }
   </style>
   