
import { conectaApi } from "./conectaApi";
import constroiCard from "./mostrarLista.js"

async function buscarAluno(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaAlunos(dadosDePesquisa);

    const lista =document.querySelector("[data-lista]")

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo,elemento.matricula, elemento.aluno, elemento.url, elemento.time)))

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarAluno(evento))