<template>
    <form @submit.prevent="salvarEntregador">
        <Alert v-if="erro" :texto="textoErro" @ao-fechar-alert="limparErro"/>
        <div class="form-group">
            <label for="username" style="font-size: 20px;">username</label>
            <input class="form-control" type="text" id="username" v-model="dados.usuarioDto.username">

            <br>
            <label for="password" style="font-size: 20px;">password</label>
            <input class="form-control" type="text" id="password" v-model="dados.usuarioDto.password">
            <br>
            <label for="email" style="font-size: 20px;">email</label>
            <input class="form-control" type="text" id="email" v-model="dados.usuarioDto.email">
            <br>
            <label for="nome" style="font-size: 20px;">Nome</label>
            <input class="form-control" type="text" id="nome" v-model="dados.entregadorDto.nome">
            <br>
            <label for="nome" style="font-size: 20px;">cpf </label>
            <input class="form-control" type="text" id="cpf" v-model="dados.entregadorDto.cpf">
            <br>

            <div class="row">
                <div class="col-sm-3">
                    <a href="#" class="btn btn-lg">
                        <button type="submit" style=" background-color: Transparent; border: none;">Cadastrar</button>

                    </a>
                </div>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import http from '@/http';
import type Dados from '@/interfaces/Dados';
import type Usuario from '@/interfaces/Usuario';
import { AxiosError } from 'axios';
import { defineComponent } from 'vue';
import Alert from "./Alert.vue";
export default defineComponent({
    name: "CadastroEntregador",
    components: {Alert},
    data() {
        return {
            dados: { usuarioDto: {}, entregadorDto: {} } as Dados,
            erro: false,
            textoErro: ""
        }
    },
    methods: {
        async salvarEntregador() {
            try {
                this.dados.usuarioDto.tipoUsuario = "E"
                await http.post("/entrega/entregador", this.dados);
                this.dados = {} as Dados
                this.$emit("aoSalvarEntregador")
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
    emits: ["aoSalvarEntregador"]
}) 
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.form-group {
    margin-bottom: 10x;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.btn {
    color: #fff;
    background: #9e1111;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 20px;
    border-radius: 0;
    border: 2px solid #9e1111;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
}

.btn:focus,
.btn:hover {
    color: #9e1111;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2) inset;
}

.btn:after {
    content: "";
    background: #fff;
    width: 100%;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
    z-index: -1;
}

.btn:hover:after {
    height: 100%;
    bottom: auto;
    top: 0;
}

@media only screen and (max-width: 767px) {
    .btn {
        margin-bottom: 30px;
    }
}
</style>