<template>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button @click="decrementarQuantidade" class="btn" type="button">-</button>
    <input type="text" class="quantidade-input" id="quantidade" :value="quantidade" @input="$emit('update:quantidade', ($event.target as HTMLInputElement).value)" readonly>
    <button @click="incrementarQuantidade" class="btn me-md-2" type="button">+</button>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({

    name: "Lista",
    props: {
        quantidade:  {
            type: Number,
            default: 0
        }
    },

    emits: [
        'update:quantidade', "atualizarQuantidade"
    ],
    
    methods: {
        incrementarQuantidade(){
            if(this.quantidade >= 1) {
            this.$emit("update:quantidade", this.quantidade+1)
            this.$emit("atualizarQuantidade")
            }
        },

        decrementarQuantidade(){
            if(this.quantidade > 1) {
            this.$emit("update:quantidade", this.quantidade-1)
            this.$emit("atualizarQuantidade")
            }
        }
    }
})
</script>
