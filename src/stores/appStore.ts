import type Usuario from '@/interfaces/Usuario';
import { defineStore } from 'pinia'

export interface Estado {
  usuario: Usuario
}

export const useStore = defineStore('appStore', {
  state: (): Estado => ({
    usuario: {} as Usuario
  }),
  actions: {
    setarUsuario(usuario: Usuario) {
      this.usuario = usuario;
    }
  }
});
