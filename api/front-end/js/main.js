// function  clickButtonGet(){
//     document.getElementById
// }


const URL = 'http://localhost:3000/lanches'
let nameInput;
let idInput;


function todos(){
    let path = URL;

    //GET
    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


function todosV2(){
    parametros = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(URL, parametros)
        .then(response => response.json())
        .then(objs => console.log("objs: ", objs))
        .catch(err => console.log("Erro:", err))
}


function consultarPorId(){
    let id = document.getElementById('input-consulta').value;

    let path = `${URL}/${id}`;

    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}

function consultarPorIdV2(){

}

function criarLanche(){
    criarNovoLanche(novoLancheXtudo());
}

function novoLancheXtudo() {
    return {
        "id": "20",
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
        body: JSON.stringify(novoLanche)
    };


    fetch(URL, parametros)
        .then(response => response.json())
        .then(lanche => console.log("Lanche: ", lanche))
        .catch(err => console.log("erro", err));
}

function getPararms(){
    idInput = document.getElementById('id-put').value;
    nameInput = document.getElementById('input-name').value;
}

function editarLanche(){
    getPararms();
    bodyRequest = {
        nome: nameInput
    };

    let parametros = {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodyRequest)
    }

    fetch(`${URL}/${idInput}`, parametros)
        .then(response => response.json())
        .then(lanche => console.log("Lanche alterado", lanche))
        .catch(err => console.log("Erro", err));
}

function excluirLanche(){
    getPararms();

    let parametros = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }

    fetch(`${URL}/${idInput}`, parametros)
        .then(response => response.json())
        .then(lanche => console.log("Lanche: ", lanche))
        .catch(err => console.log("erro", err));
}