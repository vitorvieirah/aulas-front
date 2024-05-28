const URL = 'http://localhost:3000'

function todos(){
    let path = `${URL}/lanches`;

    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


function consultarPorId(){
    let id = document.getElementById('input-consulta').value;

    let path = `${URL}/lanches/${id}`;

    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}