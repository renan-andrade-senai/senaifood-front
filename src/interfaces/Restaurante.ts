import type Endereco from './Endereco'
import type Cardapio from './Cardapio'
export default interface Restaurante{
    idrestaurante: number;
    nomeEstabelecimento : string;
    responsavel: string;
    cnpj: string;
    contato: string;
    especialidade:string;

    endereco: Endereco;
    cardapio: Cardapio[];

}