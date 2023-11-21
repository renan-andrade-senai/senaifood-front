<template>
    <div class="row justify-content-center">
        <div class="col-10">
            <h1>Entregadores</h1>
            <!-- <ListaEntregador :entregadores="entregadores" @ao-excluir-entregador="excluirEntregador"/> -->
        </div>
    </div>
    <div class="row justify-content-center">
        <CadastrarEntregador @ao-salvar-entregador="adicionarEntregador" class="col-10"/>
    </div>
</template>

<script lang="ts">
import http from '@/http';
import type Entregador from '@/interfaces/Entregador';
import { defineComponent, computed } from 'vue';
import ListaEntregador from './ListaEntregador.vue'
import CadastrarEntregador from './CadastrarEntregador.vue';
// import { useStore } from '@/store';

export default defineComponent({
    name: "PageEntregador",
    data() {
        return {
            entregadores: [] as Entregador[]
        }
    },
    methods: {
        // async listarEntregador() {
        //     const response = await http.get("/entregador");
        //     this.entregadores = response.data;
        // },
        async excluirEntregador(id: number) {
            await http.delete(`/entregador/${id}`)
            // this.listarEntregador();
        },
        async adicionarEntregador(entregador: Entregador) {
            // await http.post("/entregador", entregador);
            // this.listarEntregador();
    },
    },
    // mounted() {
    //     this.listarEntregador();
    // },
    components: {
    ListaEntregador,
    CadastrarEntregador
    
},
// setup() {
//         const store = useStore();
//         store.carregarEntregador();
//         const entregadores = computed(() => store.entregadores);
     
//         return {
//             entregadores,
//             store
//         }
//     }
})
</script>