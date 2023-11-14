<template>
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ texto }}
        <button @click="$emit('aoFecharAlert')" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Alert",
    props: {
        texto: String
    },
    emits: ["aoFecharAlert"]
})
</script>