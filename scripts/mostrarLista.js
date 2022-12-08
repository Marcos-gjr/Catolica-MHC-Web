import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard (titulo,matricula, aluno, url, time) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<img class="cert-img" width="100%" height="72%" src="${url}">
<div class="descricao-video">
   <h4 class="certificado">Certificado: </h4>
    <h3>${titulo}</h3>
    <h4 >Aluno: </h4>
    <p class="aluno">${aluno}</p>
    <h4>Matricula: </h4>
    <p class="matricula">${matricula}</p>
    <h4 class="horas">Horas: </h4>
    <p class="time">${time}</p>
</div>
<div class="button-top">
<button class="aprovado">aprovado</button>
<button class="em-analise">em analise</button>
<button class="recusado">recusado</button>
</div>`

    return video;
}

async function mostrarLista() {
    const listaApi = await conectaApi.mostrarLista();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo,elemento.matricula, elemento.aluno, elemento.url, elemento.time)))
}

mostrarLista();