const URL = 'http://localhost:3000/pessoas';

window.onload = function() {
    desativaInputs();
}

async function getAll(){
    // let listPessoas = [];

    // fetch(URL)
    //     .then(response => response.json())
    //     .then(data => {
    //         listPessoas = data;
    //         console.log(data);   
    //     })
    //     .catch(err => console.log(err));

    // return listPessoas;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
    return [];
}

async function getById(id){
    // let path = `${URL}/${id}`
    // let pessoa;

    // fetch(path)
    //     .then(response => response.json())
    //     .then(data => pessoa = data)
    //     .catch(err => console.log(err));
    
    // return pessoa;

    let path = `${URL}/${id}`;
    try {
        const response = await fetch(path);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
    return null;
}

async function update(nomeP, idadeP, sexoP, id){
    // let path = `${URL}/${pessoa.id}`

    
    // let pessoa = {
    //     nome: nomeP,
    //     idade: idadeP,
    //     sexo: sexoP
    // };

    // let parametros = {
    //     method: "PUT",
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(pessoa)

    // };

    // fetch(path, parametros)
    //     .then(response => response.json())
    //     .then(() => console.log("Lanche alterado"))
    //     .catch(err => console.log(err));

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

    try {
        const response = await fetch(path, parametros);
        const data = await response.json();
        console.log("Lanche alterado");
    } catch (err) {
        console.error(err);
    }
}

function register(nomeP, idadeP, sexoP){
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

function deletePerson(id){
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

async function consultarTodos(){
    let listPessoas = await getAll();

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

async function consultarPorId(){
    let id = document.getElementById('id-pessoa').value;
    
    // let pessoa = getById(id);

    // setInputs(pessoa);

    let pessoa = await getById(id);

    if (pessoa) {
        setInputs(pessoa);
    }
}

function alterar(){
    ativarInputs();
    let botao = document.getElementById('button-gravar');
    ativarBotaoGravar(botao);
}

async function gravarUpdate(){
    let botao = document.getElementById('button-gravar');
    desativarBotaoGravar(botao);
    desativaInputs();
    let id = document.getElementById('id-pessoa').value;
    let nome = document.getElementById('nome-pessoa').value;
    let idade = document.getElementById('idade-pessoa').value;
    let sexo = document.getElementById('sexo-pessoa').value;

    await update(nome, idade, sexo, id);
}

function deletar(){
    let id = document.getElementById('id-pessoa').value;
    deletePerson(id);
}

function cadastrar(){
    let nome = document.getElementById('nome-pessoa-cad').value;
    let idade = document.getElementById('idade-pessoa-cad').value;
    let sexo = document.getElementById('sexo-pessoa-cad').value;

    register(nome, idade, sexo);
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