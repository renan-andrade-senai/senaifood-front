import type Cardapio from '@/interfaces/Cardapio'
import type ItemPedido from '@/interfaces/ItemPedido';
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('counter', {
  state: ()=> {
    return {
      carrinho: [] as ItemPedido[],
      total: 0
    }
  },

  actions: {
    insereItensNoCarrinho(itens: Cardapio[]){
      this.carrinho = itens.map(i=> ({id_produto: i.idcardapio,
        nome: i.nomeItem, 
        quantidade: 1,
        valor_unit: i.preco,
        valor_total: i.preco}))

    },
    atualizarTotal() {
      this.total = 0
      for (const item of this.carrinho) {
        item.valor_total = item.valor_unit * item.quantidade
        this.total += item.valor_total
      }
    }
  }
  }
)
