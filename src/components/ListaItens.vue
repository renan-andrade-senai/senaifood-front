<template>
  <h2 class="card-title mb-4" style="font-size: 40px; color: white; font-family: cursive;">Cardápio</h2>
  <ol class="list-group list-group-numbered">
    <li v-for="Item in itens" :key="Item.nomeItem" class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <input type="checkbox" :value="Item" v-model="itensCheck">
        <div class="fw-bold">{{ Item.nomeItem }} {{ Item.preco }}</div>
      </div>
    </li>
  </ol>
  <button class="btn btn-primary mt-3" @click="adicionarAoCarrinho">Adicionar ao carrinho</button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type Cardapio from "../interfaces/Cardapio";
import { listarItens } from '../http';
import { RouterLink } from 'vue-router';
import { useCarrinhoStore } from '../stores/carrinhoStore';

export default defineComponent({
  name: "ListaItem",
  data() {
    return{
      itens: [] as Cardapio[], 
      itensCheck: [] as Cardapio[]
    }
    
  },
  
  async mounted() {
    const response = await listarItens(this.$route.params.id)
    this.itens = response!
  },
  components: { RouterLink }, 
  methods: { 
    adicionarAoCarrinho(){
      if(this.itensCheck && this.itensCheck.length>0){
        this.Store.insereItensNoCarrinho(this.itensCheck)
        this.$router.push("/Carrinho")
      }
    }
  },
  setup(){
    const Store = useCarrinhoStore()
    return {
      Store
    }
    
  }
}
)
</script>

<style></style>