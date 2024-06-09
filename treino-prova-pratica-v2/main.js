const URL = 'http://localhost:3000/pessoas';

window.onload = function() {
    desativaInputs();
}

function getAll(){
    let listPessoas = [];

    fetch(URL)
        .then(response => response.json())
        .then(data => listPessoas = data)
        .catch(err => console.log(err));


    let table = document.querySelector('tbody');
    table.innerHTML = '';

    listPessoas.forEach(pessoa => {
        let tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${pessoa.id}</td>
            <td>${pessoa.nome}</td>
            <td>${pessoa.idade}</td>
            <td>${pessoa.sexo}</td>
        `;

        table.append(tr);
    });
}

function getById(id){
    let id = document.getElementById('id-pessoa').value;
    let path = `${URL}/${id}`
    let pessoa;

    fetch(path)
        .then(response => response.json())
        .then(data => pessoa = data)
        .catch(err => console.log(err));
    
    
    setInputs(pessoa);
}

function update(){
    
    let id = document.getElementById('id-pessoa').value;
    let nomeP = document.getElementById('nome-pessoa').value;
    let idadeP = document.getElementById('idade-pessoa').value;
    let sexoP = document.getElementById('sexo-pessoa').value;
    
    let path = `${URL}/${id}`;
 
    let pessoa = {
        nome: nomeP,
        idade: idadeP,
        sexo: sexoP
    };

    let parametros = {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(pessoa)

    };

    fetch(path, parametros)
        .then(response => response.json())
        .then(() => console.log("Lanche alterado"))
        .catch(err => console.log(err));


    let botao = document.getElementById('button-gravar');
    desativarBotaoGravar(botao);
    desativaInputs();
}

function register(){
    let nome = document.getElementById('nome-pessoa-cad').value;
    let idade = document.getElementById('idade-pessoa-cad').value;
    let sexo = document.getElementById('sexo-pessoa-cad').value;


    let pessoa = {
        nome: nomeP,
        idade: idadeP,
        sexo: sexoP 
    };

    let parametros = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(pessoa)
    };

    fetch(URL, parametros)
        .then(response => response.json())
        .then(() => console.log("Cadastrada com sucesso"))
        .catch(err => console.log(err));
}

function deletePerson(){
    let id = document.getElementById('id-pessoa').value;
    let path = `${URL}/${id}`;
    
    let parametros = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    }

    fetch(path, parametros)
        .then(response => response.json())
        .then(() => console.log("Deletado com sucesso"))
        .catch(err => console.log(err));
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

function getInputsUpdate(){
    let inputs = [];

    inputs[0] = document.getElementById('nome-pessoa');
    inputs[1] = document.getElementById('idade-pessoa');
    inputs[2] = document.getElementById('sexo-pessoa');

    return inputs;
}

function setInputs(pessoa){
    let inputNome = document.getElementById('nome-pessoa');
    let inputIdade = document.getElementById('idade-pessoa');
    let inputSexo = document.getElementById('sexo-pessoa');

    inputNome.value = pessoa.nome;
    inputIdade.value = pessoa.idade;
    inputSexo.value = pessoa.sexo;
}