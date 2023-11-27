import type Cardapio from "@/interfaces/Cardapio";
import type Restaurante from "@/interfaces/Restaurante";
import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8081'
})

http.interceptors.request.use(config => {
    if (!config.url?.includes("security")) {
        config.headers.Authorization = "Bearer " + atob(localStorage.getItem("token") || '');
    }
    return config;
});

export default http;

export async function listarRestaurantes() {
    try {
        const response = await http.get("/restaurante/restaurante");
        const restaurantes: Restaurante[] = response.data;
        return restaurantes
    } catch (error) {
        console.error("Erro ao listar restaurantes:", error);
    }
}
export async function listarItens(id: any) {
    try {
        const response = await http.get("/restaurante/cardapio/" + id);
        const itens: Cardapio[] = response.data;
        return itens
    } catch (error) {
        console.error("Erro ao listar itens:", error);
    }
}
export async function criarItem (item: Cardapio) {
    try {
        await http.post("/item", item);
        console.log("Item cadastrado com sucesso.");
    } catch (error) {
        console.error("Erro ao cadastrar item:", error);
    }
}