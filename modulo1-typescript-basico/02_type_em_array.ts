// =========================================================
/*
    Tipagem de array em Typescript, focando em strings e
    numbers.
*/
// =========================================================
let nomes: string[] = ["John", "Maria", "Wick"]
let idades: number[] = [90, 15, 30]
console.log({ nomes, idades })

// string[] -> indica um array de strings
// number[] -> indica um array de numeros

let numeros: Array<number> = [15, 23, 90] 
// é a mesma coisa que number[]

/**
 * Esse formato ajuda a não cometer erros, como adicionar
 * ao em um array que não é daquele tipo, por exemplo
 * numeros.push("Olá"), isso vai fazer com que acuse erro
 * já que o array "numeros" só aceita numeros.
 */

/** ENTÃO... ===============================================
 * O que ocorrerá se tentarmos adicionar um valor string
 * em um array que foi tipado para números em Typescript?
 *  
 * RESPOSTA: O Typescript gerará um erro na tentativa de
 * inserção!
 */