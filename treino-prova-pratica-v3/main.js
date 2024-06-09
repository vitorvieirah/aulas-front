const URL = 'http://localhost:3000/pessoas'

window.onload = function() {
    desativaInputs();
}

async function getAll(){
    let bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = "";
    let listPersons = [];

    try{
        let response = await fetch(URL);
        let data = await response.json();
        listPersons = data;
    }catch(err){
        console.log(err);
    }

    listPersons.forEach(person => {
        let linha  = document.createElement('tr');
        linha.innerHTML = `
            <td>${person.id}</td>
            <td>${person.nome}</td>
            <td>${person.idade}</td>
            <td>${person.sexo}</td>
        `

        bodyTable.append(linha);
    });
}

async function getById(){
    let id = document.getElementById('id-person').value;
    let nome = document.getElementById('nome-person-get');
    let idade = document.getElementById('idade-person-get');
    let sexo = document.getElementById('sexo-person-get');
    let data;

    let path = `${URL}/${id}`;

    try{
        let response = await fetch(path);
        data = await response.json();
    }catch(err){
        console.log(err);
    };

    nome.value = data.nome;
    idade.value = data.idade;
    sexo.value = data.sexo;
}

function update(){
    let inputs = getInputsUpdate();
    desativaInputs();
    desativarBotaoGravar();

    let id = document.getElementById('id-person').value;
    let nomeP = inputs[0].value;
    let idadeP = inputs[1].value;
    let sexoP = inputs[2].value;

    let path = `${URL}/${id}`;

    let parametros = {
        nome: nomeP,
        idade: idadeP,
        sexo: sexoP
    }

    fetch(path, parametros)
        .then(response => response.json())
        .then(data => console.log("Pessoa alterada com sucesso", data))
        .catch(err => console.log(err));
}

function register(){
    let nomeP = document.getElementById('nome-person').value;
    let idadeP = document.getElementById('idade-person').value;
    let sexoP = document.getElementById('sexo-person').value;

    let person = {
        nome: nomeP,
        idade: idadeP,
        sexo: sexoP
    }

    let parametros = {
        method: "POST",
        herders: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(person)
    };

    fetch(URL, parametros)
        .then(response => response.json())
        .then(data => console.log("Pessoa cadastrada com sucesso: ", data))
        .catch(err => console.log(err));
}

function deletePerson(){

}

function alterar(){
    ativarInputs();
    let botao = document.getElementById('button-gravar');
    ativarBotaoGravar(botao);
}

function ativarBotaoGravar(botao){
    botao.style.visibility = 'visible';
}

function desativarBotaoGravar(botao){  
    botao.style.visibility = 'hidden';
}

function getInputsUpdate(){
    let inputs = [];

    inputs[0] = document.getElementById('nome-person-get');
    inputs[1] = document.getElementById('idade-person-get');
    inputs[2] = document.getElementById('sexo-person-get');

    return inputs;
}

function desativaInputs(){
    let inputs = getInputsUpdate();

    inputs.forEach(input => {
        input.disabled = true;
        input.style.backgroundColor = '#f3efef';
    });
}

function ativarInputs(){
    let inputs = getInputsUpdate();

    inputs.forEach(input => {
        input.disabled = false;
        input.style.backgroundColor = '#ffffff';
    });
}