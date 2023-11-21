<template>
    <form @submit.prevent="salvarEntregador">
        <Alert v-if="erro" :texto="textoErro" @ao-fechar-alert="limparErro"/>
        <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" v-model="entregador.nome">
        </div>
        <div class="mb-3">
            <label for="cpf" class="form-label">CPF</label>
            <input type="text" class="form-control" id="cpf" v-model="entregador.cpf">
        </div>
        <div class="mb-3">
            <label for="username" class="form-label">Nome de usuário</label>
            <input type="text" class="form-control" id="username" v-model="usuario.username">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" v-model="usuario.email">
        </div>
        <div class="mb-3">
            <label for="senha" class="form-label">Senha</label>
            <input type="password" class="form-control" id="senha" v-model="usuario.password">
        </div>
        <div class="mb-3">
            <label for="csenha" class="form-label">Confirme sua senha</label>
            <input type="password" class="form-control" id="csenha" v-model="usuario.csenha">
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
</template>

<script lang="ts">
import http from '@/http';
import type Entregador from '@/interfaces/Entregador';
import type Usuario from '@/interfaces/Usuario';
import { AxiosError } from 'axios';
import { defineComponent } from 'vue';
import Alert from "./Alert.vue";

export default defineComponent({
    name: "Entregador",
    data() {
        return {
            entregador: {} as Entregador,
            usuario: {tipoUsuario: 'E'} as Usuario,
            erro: false,
            textoErro: ""
        }
    },
    methods: {
        async salvarEntregador() {
            try {

                await http.post("/entrega/entregador", {entregadorDto: this.entregador, usuarioDto: this.usuario});
                this.entregador = {} as Entregador;
                this.$emit("aoSalvarEntregador");
            } catch (error) {
                if (error instanceof AxiosError && error.response?.status == 409) {
					this.erro = true;
					this.textoErro = "Nome de usuário já está sendo utilizado"
				}
            }
        }, 
        limparErro() {
            this.erro = false;
            this.textoErro = "";
        }
    },
    emits: ["aoSalvarEntregador"],
    components: {
        Alert
    }
})
</script>

<style>
</style>