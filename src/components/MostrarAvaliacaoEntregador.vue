<template>
<div class="lista">

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Id Cliente</th>
                <th scope="col">Id Entregador</th>
                <th scope="col">Nota</th>
                <th scope="col">Descrição</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" notaEntregador in avaliacaoEntregador">
                <th scope="row">{{ notaEntregador.id }}</th>
                <td>{{ notaEntregador.idCliente }}</td>
                <td>{{ notaEntregador.idEntregador }}</td>
                <td>{{ notaEntregador.nota }}</td>
                <td>{{ notaEntregador.descricao }}</td>
                <td>
                    <button type="button" class="btn btn-danger" @click="aoExcluirAvaliacao">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button type="button" class="btn btn-danger mx-3" @click="aoEditarAvaliacao(notaEntregador.id)">
                    
                        <i class="fa-solid fa-light fa-pencil"></i>

                    
                    </button>
                </td>
            </tr>
            
        </tbody>
    </table>


</div>

    </template>

    <script lang="ts">
  
import { computed, defineComponent } from 'vue';
import http from '../http'
import type AvaliacaoEntregador from '../interfaces/AvaliacaoEntregador';
import { useStore } from '@/stores/appStore';
import type Cliente from '@/interfaces/Cliente';

  export default defineComponent ({

    name: "listaAvaliacaoEntregador",
    data() {
        return {
            avaliacaoEntregador: [] as AvaliacaoEntregador[]
        }
    },
    async mounted() {
        const response = await http.get("/avaliacao/avaliacaoEntregador/" + this.cliente.id);
        this.avaliacaoEntregador = response.data;
    },
    
    methods:{
        
        async aoExcluirAvaliacao(){

            await http.delete("/avaliacaoRestaurante/1");

            const response = await http.get("/avaliacaoRestaurante/1");

            this.avaliacaoEntregador = response.data;

        },

        async aoEditarAvaliacao(id: number){
            
            this.$router.push('/fazerAvaliacaoEntregador/' + id)

        }


    },
    setup() {
        const store = useStore();
        const cliente = computed(() => store.dados as Cliente);
        return {
            cliente
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