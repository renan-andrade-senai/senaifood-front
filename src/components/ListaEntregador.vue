<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">CPF</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entregador in entregadores">
                <th scope="row">{{ entregador.id }}</th>
                <td>{{ entregador.nome }}</td>
                <td>{{ entregador.cpf }}</td>
                <td>
                    <button type="button" class="btn btn-danger" @click="$emit('aoExcluirEntregador', entregador.id)">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
            
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type Entregador from "../interfaces/Entregador";

export default defineComponent({
    name: "ListaEntregador",
    props: {
        entregadores: {
            type: Array as PropType<Entregador[]>,
            required: true
        }
    },
    emits: ["aoExcluirEntregador"]
})
</script>

<style></style>