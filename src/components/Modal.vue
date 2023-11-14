<template>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>

            <div class="col-md-6">
								<label for="text" class="form-label">Nome Estabelecimento:</label>
								<input type="text" class="form-control" id="text">
							</div>
							<div class="col-md-6">
								<label for="text" class="form-label">Responsável:</label>
								<input type="text" class="form-control" id="text" >
							</div>
							<div class="col-12">
								<label for="text" class="form-label">CNPJ:</label>
								<input type="text" class="form-control" id="text" >
							</div>
							<div class="col-12">
								<label for="text" class="form-label">Contato:</label>
								<input type="text" class="form-control" id="text" >
							</div>
							<div class="col-md-6">
								<label for="inputCity" class="form-label">Especialidade</label>
								<input type="text" class="form-control" id="inputCity" >
							</div>
							<div class="col-12">
								<button type="submit" class="btn btn-primary">{{  }}</button>
							</div>



        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</template>
<script lang="ts">
import type Cardapio from '@/interfaces/Cardapio';
import  { defineComponent, type PropType } from 'vue';


export default defineComponent({
    name: "modal",
    props: {
        produto:Object as PropType <Cardapio>
    }
})

</script>
<style>

</style>