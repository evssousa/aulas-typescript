// =========================================================
/*
    Tipagens primitivas do Typescript: string, number e
    boolean. Erros e boas práticas.
*/
// =========================================================

// =========================================================
// = = = = = = = = = = // 1-As três principais tipagens
// =========================================================
let nome: string = "John"
let idade: number = 34
let programador: boolean = true
// os tipos das variáveis sempre devem ser informadas

console.log({ nome, idade, programador })

/** ENTÃO... ===============================================
 * Sobre a tipagem no Typescript, é recomendado sempre usar
 * o tipo com a primeira letra em minúsculo. Dado isso, qual
 * é a forma correta de declarar uma variável do tipo "string"?
 * 
 * RESPOSTA: let nome: string = "John"
 */