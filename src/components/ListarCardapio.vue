<template>
  <table class="table">
      <thead>
          <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descricao</th>
              <th scope="col">Preco</th>
              <th scope="col">Tempo</th>
              <th scope="col">Foto</th>
              <th scope="col">Editar</th>
              <th scope="col">Deletar</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="cardapio in cardapios">
              <th scope="row">{{ cardapio.idcardapio }}</th>
              <td>{{ cardapio.nomeItem }}</td>
              <td>{{ cardapio.descricao }}</td>
              <td>{{ cardapio.preco }}</td>
              <td>{{ cardapio.tempoPreparo }}</td>
              <td>{{ cardapio.caminhoFoto }}</td>
              <td>
                  <button type="button" class="btn btn-danger" @click="editarCardapio(cardapio)" data-bs-toggle="modal" data-bs-target="#idModal">
                    <i class="fa-solid fa-pencil" style="color: #ffffff;"></i>
                </button>
              </td>
              <td>
                  <button type="button" class="btn btn-danger" @click= " excluirCardapio (cardapio.idcardapio) ">
                      <i class="fa-solid fa-trash fa-beat" style="color: #ffffff;"></i>
                  </button>
              </td>
          </tr>
          
      </tbody>
  </table>
<Modal :produto="produto" id-modal="idModal">



</Modal>  
</template>



<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type Cardapio from '@/interfaces/Cardapio';
import http from '@/http';
import Modal from './Modal.vue';


export default defineComponent({
    name: "ListaCardapios",
    data() {
        return {
            cardapios: [] as Cardapio[],
            produto: {} as Cardapio
        };
    },
    async mounted() {
        const response = await http.get("/restaurante/cardapio");
        this.cardapios = response.data;
    },
    methods: {
        async excluirCardapio(idcardapio: number) {
            await http.delete("/restaurante/cardapio/" + idcardapio);
            const response = await http.get("/restaurante/cardapio");
            this.cardapios = response.data;
        },
        editarCardapio(cardapio: Cardapio) {
            this.produto = cardapio;
        }
    },
    emits: ["aoExcluirCardapio", "aoAlterarCardapio"],
    components: { Modal }
})
</script>

<style></style>