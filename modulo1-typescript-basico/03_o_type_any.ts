// =========================================================
/*
    Utilização do tipo "any" (qualquer) no Typescript para
    ignorar verificações de tipos.
*/
// =========================================================
// let frutasA: string[] = ["Abacaxi", "Melância", "Uva"]
// frutas.push(556)             // isso irá gerar erro!

// Modo correto, se quiser adicionar tipos diferentes:
let frutasB: any = ["Abacaxi", "Melância", "Uva"]
frutasB.push(556)               // isso NÃO irá gerar erro!!!

// OBS: o any é para ser usado somente em última ocasião
// quando não se encontra outro tipo.

/** ENTÃO... ===============================================
 * Qual é um potencial problema ao usar o tipo "any" em
 * variáveis no Typescript?
 *  
 * RESPOSTA: Diminui a segurança e as verificações de
 * tipo do código!
 */