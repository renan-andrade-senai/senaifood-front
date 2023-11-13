<template>
    <div class="row align-items-center justify-content-center">
        <div class="col-6">
            <div class="card">
                <div class="card-body">
                    <div v-if="erro" class="alert alert-danger" role="alert">
                        Usuário ou senha incorretos!
                    </div>
                    <form @submit.prevent="autenticar">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-light">Nome de usuário</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" v-model="usuario.username">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-light">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" v-model="usuario.password">
                        </div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type Usuario from "../interfaces/Usuario";
import http from "../http";
import { useStore } from '@/stores/appStore';

export default defineComponent({
    name: "LoginView",
    data() {
        return {
            usuario: {} as Usuario,
            erro: false
        }
    },
    methods: {
        async autenticar() {
            try {
                const response = await http.post("/security/auth/login", this.usuario);
                localStorage.setItem("token", btoa(response.data.user.token));
                this.store.setarUsuario({usuario: response.data, data: response.data.dados});
                this.$router.push("/");
            } catch {
                this.erro = true;
            }
        }
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    }
})
</script>

<style scoped>
.row {
    height: calc(100vh - 56px) ;
}

.card {
    background-color: var(--cor-senai-food);
}
</style>