<template>
  <div class="card" style="width: 50rem; height: 40rem; left: 242px; background-color:var(--cor-senai-food);">
    <div class="card-body">
      <h2 class="card-title mb-4" style="font-size: 40px; color: white; font-family: cursive;">Carrinho</h2>
      <ol class="list-group list-group-numbered">
        <li v-for="Item in Carrinho" :key="Item.id_produto" class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{{ Item.nome }} {{ Item.valor_unit }}</div>
          </div>
          <BotaoQuantidade v-model:quantidade="Item.quantidade" @atualizarQuantidade="Store.atualizarTotal" />
        </li>
      </ol>
      <h4>Valor Total: {{ Store.total}}</h4>
      <RouterLink to="/TelaFinal">
        <button type="button" class="btn btn-success">Finalizar pedido</button>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue';
import BotaoQuantidade from '@/components/BotaoQuantidade.vue';
import type Cardapio from "../interfaces/Cardapio";
// import { listarItens } from '../http';
import { RouterLink } from 'vue-router';
import { useCarrinhoStore } from '../stores/carrinhoStore';

export default defineComponent({
  name: "Carrinho",
  components: {
    BotaoQuantidade
  },
  // async mounted() {
    //     const response = await listarItens(this.$route.params.id)
    //     this.itens = response
    // },
    // components: { RouterLink },
    
    setup(){
      const Store= useCarrinhoStore()
      const Carrinho = computed(()=> Store.carrinho)
      return{
        Store, Carrinho
      }
    }
  }
  )
  
</script>

<style></style>