import type Restaurante from "./Restaurante";

export default interface Cardapio{
    
    idcardapio: number;
    nomeItem: string;
    descricao: string;
    preco: number;
    tempoPreparo: number;
    caminhoFoto: string;
    restauranteDTO: Restaurante;
}