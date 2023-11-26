<template>
<ListaEntrega :entregas="entregas" @aoExcluirEntrega=""/>
</template>

<script lang="ts">
import http from '@/http';
import type Entrega from '@/interfaces/Entrega';
import ListaEntrega from './ListaEntrega.vue';
import { defineComponent} from 'vue';
export default defineComponent({
    name: "PageEntrega",
    data(){
        return{
            entregas: [] as Entrega[]
        }
    },
    components: {
        ListaEntrega,
    },
    methods: {
    async listarEntregas() {
        const response = await http.get("/entrega/entrega")
        this.entregas = response.data;
    },
    async excluirEntrega(id: number) {
        await http.delete(`/entrega/entrega/${id}`)
        this.listarEntregas();
    }
    },
    mounted(){
        this.listarEntregas();
    }
})
</script>

<style>
</style>