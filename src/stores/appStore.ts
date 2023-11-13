import type Usuario from '@/interfaces/Usuario';
import { defineStore } from 'pinia'

export interface Estado {
  usuario: Usuario,
  dados: any
}

export const useStore = defineStore('appStore', {
  state: (): Estado => ({
    usuario: {} as Usuario,
    dados: {}
  }),
  actions: {
    setarUsuario({usuario, data}: {usuario: Usuario, data: any}) {
      this.usuario = usuario;
      this.dados = data;
    }
  }
});
