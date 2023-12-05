<template>
    <div >
        <div class="row justify-content-center">
            <ListaEntrega :entregas="entregas" @aoExcluirEntrega="excluirEntrega" @ao-entregar-entrega="entregarEntrega"/>
            <CadastroEntrega @aoSalvarEntrega="listarEntregas" style="background-color: rgb(255, 90, 90);"/>
        </div>
    </div>
</template>

<script lang="ts">
import http from '@/http';
import type Entrega from '@/interfaces/Entrega';
import ListaEntrega from './ListaEntrega.vue';
import CadastroEntrega from './CadastroEntrega.vue';
import { computed, defineComponent} from 'vue';
import { useStore } from '@/stores/appStore';
import type Entregador from '@/interfaces/Entregador';
export default defineComponent({
    name: "PageEntrega",
    data(){
        return{
            entregas: [] as Entrega[]
        }
    },
    components: {
        ListaEntrega,
        CadastroEntrega
    },
    methods: {
        async listarEntregas() {
            const response = await http.get("/entrega/entrega")
            this.entregas = response.data;
        },
        async excluirEntrega(id: number) {
            await http.delete(`/entrega/entrega/${id}`)
            this.listarEntregas();
        },
        async entregarEntrega(entrega: Entrega){
            await http.put(`/entrega/entrega/${this.entregador.id}`, entrega)
            this.listarEntregas();
        }
    },
    mounted(){
        this.listarEntregas();
    },
    setup() {
        const store = useStore();
        const entregador = computed(() => store.dados as Entregador);
        return {
            entregador
        }
    }
})
</script>

<style>
</style>