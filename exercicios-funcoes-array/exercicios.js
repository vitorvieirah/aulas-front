// 1. filter
// Exercício: Dada uma lista de números, filtre e retorne todos os números pares.

let numbers = [5,6,2,10,18,19,25,97];
let frutas = ["Maça", "Manga", "Pessego", "Maracuja", "Kiwi", "Morango", "Limão"];

function mainFilter(){
    console.log("Lista de numeros: ", numbers);
    console.log("Lista apenas com numeros pares: ", filtraNumerosPar());
}

function filtraNumerosPar(){
    return numbers.filter(num => num % 2 === 0);
}

//================================================================================

// 2. map
// Exercício: Dada uma lista de números, crie uma nova lista onde cada número é multiplicado por 2. 


function mainMap(){
    console.log("Lista de numeros: ", numbers);
    console.log("Lista dos numeros multiplicados por 2: ", multiplicaNumeros());
}

function multiplicaNumeros(){
    return numbers.map(num => num * 2);
}

// //================================================================================
// 3. reduce
// Exercício: Dada uma lista de números, calcule a soma de todos os números.

function mainReduce(){
    console.log("Lista de numeros: ", numbers);
    console.log("Soma de todos os valores: ", somaDosNumeros());
}

function somaDosNumeros(){
    return numbers.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}

// //===================================================================================
// 4. slice
// Exercício: Dada uma lista de frutas, crie uma nova lista contendo apenas as três primeiras frutas.

function mainSlice(){
    console.log("Lista de numeors: ", numbers);

}

function novaListaComFrutas(){
    return 
}