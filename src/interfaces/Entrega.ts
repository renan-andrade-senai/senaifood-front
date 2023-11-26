export default interface Entrega{
    id: number,
    pedidoId: number,
    entregador: Entregador,
    prazo: Date
}

import type Entregador from "./Entregador"