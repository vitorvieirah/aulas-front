// 1. filter
// Exercício: Dada uma lista de números, filtre e retorne todos os números pares.

let numbers = [5,6,2,10,18,19,25,97];
let frutas = ["Maça", "Manga", "Pessego", "Maracuja", "Kiwi", "Morango", "Limão"];
let persons = [
    {
        "nome": "Vitor",
        "idade": 40
    },
    {
        "nome": "Pedro",
        "idade": 35
    },
    {
        "nome": "Maria",
        "idade": 32
    },
    {
        "nome": "André",
        "idade": 21
    },
    {
        "nome": "João",
        "idade": 15
    }
]

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
    console.log("Lista de numeors: ", frutas);
    console.log("Apenas as tres primeiros posições: ", novaListaComFrutas());
}

function novaListaComFrutas(){
    return frutas.slice(0, 3);
}

// //=====================================================================================
// 6. find
// Exercício: Dada uma lista de objetos de pessoas com nome e idade, encontre a primeira pessoa que tem idade maior que 30.

function mainFind(){
    console.log("Lista de pessoas: ", persons);
    console.log("Primeira pessoa com maior de 30 anos: ", findAdultPerson());
}

function findAdultPerson(){
    return persons.find(person => person.idade > 30);
}

//=========================================================================================
// 7. every
// Exercício: Dada uma lista de números, verifique se todos os números são positivos.

function mainEvery(){
    console.log("Lista de numeros: ", numbers);
    console.log("Verica numeros negativos: ", validaNumerosNegativos());
}

function validaNumerosNegativos(){
    return numbers.every(number => number > 0);
}

// //=======================================================================================
// 8. some
// Exercício: Dada uma lista de números, verifique se pelo menos um número é par.

function mainSome(){
    console.log("Lista de numeros: ", numbers);
    console.log("Valida se tem algum numero par: ", validaNumeroPar());
}

function validaNumeroPar(){
    return numbers.some(number => number % 2 === 0);
}