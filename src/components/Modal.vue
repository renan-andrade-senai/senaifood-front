<template>
    <!-- Modal -->
    <div class="modal fade" :id="idModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit.prevent="alterarCardapio">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="nomeItem" class="form-label">Nome do Item</label>
                            <input type="text" class="form-control" id="nomeItem" v-model="produto.nomeItem">
                        </div>
                        <div class="mb-3">
                            <label for="descricao" class="form-label">Descrição</label>
                            <input type="text" class="form-control" id="descricao" v-model="produto.descricao">
                        </div>
                        <div class="mb-3">
                            <label for="preco" class="form-label">Preço</label>
                            <input type="number" class="form-control" id="preco" v-model="produto.preco">
                        </div>
                        <div class="mb-3">
                            <label for="tempoPreparo" class="form-label">Tempo de Preparo (em minutos)</label>
                            <input type="number" class="form-control" id="tempoPreparo" v-model="produto.tempoPreparo">
                        </div>
                        <div class="mb-3">
                            <label for="caminhoFoto" class="form-label">Caminho da Foto</label>
                            <input type="text" class="form-control" id="caminhoFoto" v-model="produto.caminhoFoto">
                        </div>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Alterar Cardápio</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>
<script lang="ts">
import http from '@/http';
import type Cardapio from '@/interfaces/Cardapio';
import { defineComponent, type PropType } from 'vue';


export default defineComponent({
    name: "modal",
    props: {
        produto:{
            type: Object as PropType<Cardapio>, 
                required: true  
            },
            idModal: String 
    },
    methods: {
        async alterarCardapio() {
            await http.put("/restaurante/cardapio", this.produto)
        },
    }
})
    
</script>
<style></style>