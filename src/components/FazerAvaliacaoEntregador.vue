<template>
<div class="avalia">

  <Feedback v-model:descricao="avaliacao.descricao" v-model:nota="avaliacao.nota" @ao-envia-avaliacao="enviarAvaliacao"/>

</div>

  
</template>
<script lang="ts">

import type AvaliacaoEntregador from '../interfaces/AvaliacaoEntregador';
import { defineComponent } from 'vue';
import http from '../http'
import Feedback from './Feedback.vue';

export default defineComponent({

  components: {

    Feedback


  },

  data() {

    return {
      avaliacao: {} as AvaliacaoEntregador,
      nota: 0,
      descricao: ""

    }

  },
  async mounted() {
    const response = await http.get('/avaliacao/avaliacaoEntregador/porid/' + this.$route.params.id);
    this.avaliacao = response.data;
  },
  methods: {
    async enviarAvaliacao() {
      await http.put('/avaliacao/avaliacaoEntregador', this.avaliacao);
      this.$router.push("/mostrarAvaliacoesEntregador")
    }
  }

})

</script>

<style>

.avalia{

            background-color: rgba(255, 255, 255, 0.8); /* Cor de fundo branca opaca */
            border-radius: 10px; /* Borda arredondada */
            padding: 20px; /* Espaçamento interno para o conteúdo */
            margin-top: 15px;

}

</style>