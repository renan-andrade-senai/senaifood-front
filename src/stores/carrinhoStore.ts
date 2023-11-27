import type Cardapio from '@/interfaces/Cardapio'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('counter', {
  state: ()=> {
    return {
      carrinho: [] as Cardapio[]
    }
  },

  actions: {
    insereItensNoCarrinho(itens: Cardapio[]){
      this.carrinho = itens;

    }
  }

  }
)
