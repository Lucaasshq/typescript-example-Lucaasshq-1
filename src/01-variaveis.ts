console.log(` 1. Faça um programa TypeScript que calcule o quadrado de cada elemento do array, use as seguintes estratégias:
 a. iterando com for simples
 b. iterando com forEach
 1.1 Escreve um teste com o array [3,5,7,3,8,9,1]`)

let numeros:number[] = [3,5,7,3,8,9,1];

export function calcularQuadrado(arrNum:number[]):number[] {
    let quadrados:number[] = [];

    for (const n of arrNum) {
        quadrados.push(n ** 2);
    }
    
    return quadrados;
}

export function calcularQuadradoForEach(arrNum:number[]):number[] {
    let quadrados:number[] = [];

    arrNum.forEach(element => {
        quadrados.push(element ** 2)    
    });

    return quadrados;

}

console.log(calcularQuadrado(numeros));
console.log(calcularQuadradoForEach(numeros));


console.log(` 2. Faça um Programa TypeScript que transforme o array, concatenando as strings com 1 (um) espaço (“ “). Utilize o método JOIN da classe Array, passando uma função arrow como parâmetro.
2.1 Escreva um teste com o array [‘Arrays’, ‘com’, ‘TypeScript’]`)

export const concatenarArray = (arr:string[]): string => { return arr.join(" ")}

let arrString:string[] = ['Arrays', 'com', 'Typescript'];

let str:string = concatenarArray(arrString);
console.log(str)


console.log(` 3. Faça um programa que ordene os elementos de um array. Use o método SORT
 da classe Array para ordenar de forma decrescente, passando uma função arrow como parâmetro.
 3.1 Escreva um teste com o array [‘carro’, ’boneco’, ’ave’, ‘lapis’]
`)
let arrObjetos:string[] = ['carro', 'boneco', 'ave', 'lapis'];

export const ordenar = (arr:string[]): string[] => {
    return arr.sort((a, b) => a.localeCompare(b));
};
console.log(ordenar(arrObjetos))

console.log(` 4. Faça um programa que leia o array pegue apenas os dois primeiros elementos. Use o método SLICE da classe Array.
 4.1 Escreva um teste com o array [2,4,6,2,8,9,5]`)

let arrayN2:number[] = [2,4,6,2,8,9,5] 

export function doisPrimeiros(arr1:number[]): number[] {
    return arr1.slice(0,2);
}

console.log(doisPrimeiros(arrayN2));

console.log(` 5. Faça um programa que leia o array e extrai os elementos pares. Use o método FILTER da classe Array, passando uma função arrow como parâmetro.
 5.1 Escreva um teste com o array [8, 3, 9, 5, 6, 12]`)

let num:number[] = [8, 3, 9, 5, 6, 12];

export function extrairPares(arr:number[]): number[]{
    return arr.filter((a) => (a % 2 == 0))
}

console.log(extrairPares(num));

console.log(` 6. Faça um programa TypeScript:
 6.1 Crie duas classes que possuam uma interface em comum. Evite criar classes com nomes sem significado (class A, class X). Crie classes com nomes que representem algo significativo.
 6.2 As classes devem possuir atributos diferentes. 
 6.3 A interface deve possuir pelo menos um método. 
 6.4 A implementação desse método nas classes deve utilizar os atributos.
 6.5 Escreve um teste que instancie as classes criadas, altera os atributos e teste o método comum na interface.`)

interface apresentar {
    falar(): string
}

class Pessoa implements apresentar {
    nome:string;
    idade:number;

    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    falar(): string {
        return "Olá me chamo "+this.nome
    }
}

class Cliente implements apresentar {
    nome:string

    constructor(nome:string){
        this.nome = nome;
    }
    
    falar(): string {
        return "Olá me chamo "+ this.nome
    }
}

let pessoa1:Pessoa = new Pessoa("Lucas", 22);
let cliente1:Cliente = new Cliente("Jorge");

console.log(pessoa1.falar());
console.log(cliente1.falar());