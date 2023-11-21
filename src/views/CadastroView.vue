<template>
    <div class="container">
        <div id="homeView">
            <div id="home">
                <form @submit.prevent="addCliente">
                <h1>Nome do cliente</h1>
                <input type="text" class="inputHV" v-model="cliente.nomeCliente"> 
                <h1>CPF</h1>
                <input type="text" class="inputHV" v-model="cliente.cpfCliente">
                <h1>Endereço</h1>
                <input type="text" class="inputHV" v-model="cliente.enderecoCliente">
                <h1>Telefone</h1>
                <input type="text" class="inputHV" v-model="cliente.telefoneCliente">
                <h1>Email</h1>
                <input type="text" class="inputHV" v-model="cliente.emailCliente">
                <h1>Nome de usuário</h1>
                <input type="text" class="inputHV" v-model="usuario.username">
                <h1>Senha</h1>
                <input type="password" class="inputHV" v-model="usuario.password">
                <h1>Confirmar Senha</h1>
                <input type="password" class="inputHV" v-model="usuario.csenha">
                <br>
                <button type="submit" id="salvaCliente">Salvar</button>
            </form>

                
            </div>
            <div id="menu">
                <img src="../assets/imgAd.png" alt="">
            </div>

        </div>
    </div>
    
</template>

<style scoped>


#homeView { 
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100%;
  filter: blur(0) !important;
}

.container {
    width: 100vw;
    height: 100vh;
    background-color: red;
    background: #AE2012 url("../assets/variedade-plana-com-deliciosa-comida-brasileira.jpg") no-repeat !important;
    background-position: center center;
    background-size: 120% !important;
    background-position: 30% 45%;
}

#home>h1 {
    padding: 10px;
}

#home {
    flex-direction: column;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: aqua;
    margin: 45px;
    padding: 20px;
}

#menu {
    flex-direction: column;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: aqua;
    background-image: url("../assets/imgAd.png");
}

#salvaCliente {
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>

<script lang="ts">
import http from '@/http';
import type Cliente from '@/interfaces/Cliente';
import type Usuario from '@/interfaces/Usuario';
import { useStore } from '@/stores/appStore';
import { computed, defineComponent } from 'vue';


export default defineComponent({
    data() {
        return {
            cliente: {} as Cliente,
            usuario: {tipoUsuario: 'C'} as Usuario
        }
    },

    methods: {
        async addCliente() {
            this.usuario.email = this.cliente.emailCliente;
            this.cliente.usuarioDto = this.usuario;
            /*const response =*/ await http.post("/cliente/cliente", this.cliente)
            // this.storeUsuarios.setCliente = response.data;
            // console.log(storeUsuario().cliente.nomeCliente)
        }
    },

    // setup() {
    //     const storeUsuarios = useStore()
    //     const usuarioCompartilhado = computed(() => storeUsuarios.cliente)
    //     return {
    //         storeUsuarios,
    //         usuarioCompartilhado
    //     }
    // },

})
</script>