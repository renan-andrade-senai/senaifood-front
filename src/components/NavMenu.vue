<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <RouterLink v-if="modoRestaurante" to="/dadosRestaurante" class="nav-link text-light">Dados Restaurante</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink v-if="modoRestaurante" to="/cardapio" class="nav-link text-light">Cardápio</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink v-if="modoCliente" class="nav-link active text-light" to="/avaliacoes">Avaliações</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink v-if="modoEntregador" to="/entregas" class="nav-link text-light">Entregas</RouterLink>
                    </li>
                </ul>
                <span class="nav-item">
                    <a class="nav-link text-light">Logout</a>
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
    setup() {
        const store = useStore();
        const modoRestaurante = computed(() => store.usuario.tipoUsuario == 'R');
        const modoCliente = computed(() => store.usuario.tipoUsuario == 'C');
        const modoEntregador = computed(() => store.usuario.tipoUsuario == 'E');
        return {
            modoCliente, modoEntregador, modoRestaurante
        }
    }
})
</script>