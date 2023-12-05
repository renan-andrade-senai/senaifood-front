<template>
<form @submit.prevent="salvarEntrega" class="form=container">
    <div class="form-group">
    <label for="pedidoId" style="font-size: 20px;">pedidoId  </label>
    <input type="text" id="pedidoId" v-model="entrega.pedidoId">
    </div>
    <div class="form-group">
    <label for="prazo" style="font-size: 20px;">prazo  </label>
    <input type="datetime-local" id="prazo" v-model="entrega.prazo">
    </div>
    <button type="submit">cadastrar</button>
    </form>
</template>

<script lang="ts">
 import http from '@/http';
    import type Entrega from '@/interfaces/Entrega';
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "CadastroEntrega",
        data(){
            return {
                entrega: {} as Entrega
            }
        },
        methods:{
            async salvarEntrega(){
                await http.post("/entrega/entrega",this.entrega);
                this.entrega = {} as Entrega
                this.$emit("aoSalvarEntrega")
            }
        },
        emits: ["aoSalvarEntrega"]
    }) 
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>