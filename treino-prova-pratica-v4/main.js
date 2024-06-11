const URL = 'http://localhost:3000/pessoas'

window.onload = function() {
    desativaInputs();
}

async function getAll(){
    let listPersons = [];
    let table = document.querySelector('tbody');
    table.innerHTML = "";

    try{
        let response = await fetch(URL);
        let data = await response.json();
        listPersons = data;
    }catch(err){
        console.log(err);
    }

    listPersons.forEach(person => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${person.id}</td>
            <td>${person.nome}</td>
            <td>${person.indade}</td>
            <td>${person.sexo}</td>
        `;

        table.append(linha);
    });
}

async function getById(){
    let id = document.getElementById('id-person').value;
    let path = `${URL}/${id}`;
    let person;

    try{
        let response = await fetch(path);
        let data = await response.json();
        person = data;
    }catch(err){
        console.log(err);
    }

    let inputName = document.getElementById('nome-person-get');
    let inputIdade = document.getElementById('idade-person-get');
    let inputSexo = document.getElementById('sexo-person-get');

    inputName.value = person.nome;
    inputIdade.value = person.idade;
    inputSexo.value = person.sexo;
}

async function update(){
    let id = document.getElementById('id-person').value;
    let inputName = document.getElementById('nome-person-get').value;
    let inputIdade = document.getElementById('idade-person-get').value;
    let inputSexo = document.getElementById('sexo-person-get').value;

    let path = `${URL}/${id}`;

    let newPerson = {
        nome: inputName,
        idade: inputIdade,
        sexo: inputSexo
    }

    let parametros = {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newPerson)
    };
    

    try{
        let response = await fetch(path, parametros);
        let data = await response.json();
        console.log("Alterado com sucesso: ", data);
    }catch(err){
        console.log(err);
    };
}

async function register(){
    let inputName = document.getElementById('nome-person').value;
    let inputIdade = document.getElementById('idade-person').value;
    let inputSexo = document.getElementById('sexo-person').value;

    let newPerson = {
        nome: inputName,
        idade: inputIdade,
        sexo: inputSexo
    };

    let parametros = {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(newPerson)
    };

    try{
        let response = await fetch(URL, parametros);
        let data = response.json();
        console.log("Cadastrado com sucesso>: ", data);
    }catch(err){
        console.log(err);
    }
}

async function deletePerson(){
    let id = document.getElementById('id-person').value;
    let path = `${URL}/${id}`;

    let parametros = {
        method: "DELETE",
        headers:{
            "Content-type": "application/json"
        }
    }

    try{
        let response = await fetch(path, parametros);
        let data = await response.json();
        console.log("Pessoa deletado com sucesso: ", data);
    }catch(err){
        console.log(err);
    }
}

function alterar(){
    ativarInputs();
}

// function ativarBotaoGravar(botao){
//     botao.style.visibility = 'visible';
// }

// function desativarBotaoGravar(botao){  
//     botao.style.visibility = 'hidden';
// }

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