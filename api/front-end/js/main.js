const URL = 'http://localhost:3000/lanches'

function todos(){
    let path = URL;

    //GET
    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


function consultarPorId(){
    let id = document.getElementById('input-consulta').value;

    let path = `${URL}/${id}`;

    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}

function criarLanche(){
    criarNovoLanche(JSON.stringify(novoLancheXtudo()));
}

function novoLancheXtudo() {
    return {
        "id": "1",
        "nome": "X-Tudo",
        "preco": 30.5,
        "descricao": "O melhor X-Tudp da região",
        "ingredientes": [
          "hamburguer de angus",
          "alface",
          "tomate",
          "molho especial",
          "queijo",
          "bacon",
          "calabresa",
          "frango"
        ]
    };
}

//Metodo POST
function criarNovoLanche(novoLanche){
    let parametros = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: {
            novoLanche
        }
    };


    fetch(URL, parametros)
    .then(response => response.json())
    .then(lanche => console.log("Lanche: ", lanche))
    .catch((err) => console.log("erro", err));
}