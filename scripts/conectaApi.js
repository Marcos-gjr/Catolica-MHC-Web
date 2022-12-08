async function mostrarLista() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}
async function criaVideo(titulo, matricula, aluno, url,time) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            matricula: matricula,
            aluno: aluno,
            url: url,
            time: time
        })
    })

    const conexaoConvertida = await  conexao.json();
    
    return conexaoConvertida;
    
}

async function buscaAlunos(termoDeBusca){

    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    mostrarLista,
    criaVideo,
    buscaAlunos
}
