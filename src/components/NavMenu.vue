<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#">Senai Food</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item" v-if="modoRestaurante">
                        <RouterLink to="/dadosRestaurante" class="nav-link text-light">Dados Restaurante</RouterLink>
                    </li>
                    <li class="nav-item dropdown" v-if="modoRestaurante">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cardápio
                        </a>
                        <ul class="dropdown-menu">
                            <li><RouterLink to="/cardapio" class="dropdown-item">Lista</RouterLink></li>
                            <li><RouterLink to="/cadastrar-cardapio" class="dropdown-item">Cadastro</RouterLink></li>
                        </ul>
                    </li>
                    <li class="nav-item" v-if="modoCliente">
                        <RouterLink to="/lista-restaurantes" class="nav-link text-light">Restaurantes</RouterLink>
                    </li>
                    <li class="nav-item" v-if="modoCliente">
                        <RouterLink to="/Carrinho" class="nav-link text-light">Carrinho</RouterLink>
                    </li>
                    <li class="nav-item dropdown" v-if="modoCliente">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Avaliações
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink to="/mostrarAvaliacoesRestaurante" class="dropdown-item">Avaliações de Restaurantes
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/mostrarAvaliacoesEntregador" class="dropdown-item"> Avaliações de Entregadores
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                        <li class="nav-item" v-if="modoEntregador">
                            <RouterLink to="/entregas" class="nav-link text-light">Entregas</RouterLink>
                        </li>
                    </ul>
                    <span class="nav-item">
                        <a class="nav-link text-light" @click="$router.push('/login')">{{textoMenuLogin}}</a>
                    </span>
                </div>
            </div>
        </nav>
    </template>
    
    <script lang="ts">
    import { useStore } from "@/stores/appStore";
    import { computed, defineComponent } from "vue";
    
    export default defineComponent({
        name: "NavMenu",
        computed: {
            textoMenuLogin() {
                return this.store.usuario.token ? 'Logout': 'Login';
            }
        },
        setup() {
            const store = useStore();
            const modoRestaurante = computed(() => store.usuario.tipoUsuario == 'R');
            const modoCliente = computed(() => store.usuario.tipoUsuario == 'C');
            const modoEntregador = computed(() => store.usuario.tipoUsuario == 'E');
            return {
                modoCliente, modoEntregador, modoRestaurante, store
            }
        }
    })
</script>

<style scoped>
span>a.nav-link {
    cursor: pointer;
}
</style>