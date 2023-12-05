<template>
    <div class="container" style="background-color: rgb(255, 90, 90);">
        <div class="center">
    <CadastroEntregador />
        </div>
    </div>
</template>

<script lang="ts">
import http from '@/http';
import type Entregador from '@/interfaces/Entregador';
import { defineComponent, computed } from 'vue';
import ListaEntregador from './ListaEntregador.vue'
import CadastrarEntregador from './CadastrarEntregador.vue';
import CadastroEntregador from './CadastroEntregador.vue';
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
    CadastrarEntregador,
    CadastroEntregador
    
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

<style scoped>
.container {
    display: grid;
    height: 100vh;
    place-items: center;
}
</style>