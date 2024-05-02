const URL = 'http://localhost:3000'

function todos(){
    let path = `${URL}/nomes`;

    fetch(path)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}