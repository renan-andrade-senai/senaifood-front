import type Usuario from "./Usuario"

export default interface Cliente {
    id: number,
    nomeCliente: string,
    cpfCliente: string,
    telefoneCliente: string,
    enderecoCliente: string,
    idUsuario: number
    emailCliente: string,
    image: Blob,
    usuarioDto: Usuario
}