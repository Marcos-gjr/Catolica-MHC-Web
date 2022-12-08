async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}
async function criaVideo(titulo, descricao, url) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            aluno: `${aluno} `,
            url: url,
            time: time
        })
    })

    const conexaoConvertida = await  conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){

    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}