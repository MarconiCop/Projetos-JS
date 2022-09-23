// ARRAY COMMANDS

let techs = ["html","css","js"]

techs.push("nodejs") //ADICIONA UM ITEM NO FIM
techs.unshift("sql") //ADICIONA NO COMEÇO
techs.pop() //REMOVE O ÚLTIMO
techs.shift() //REMOVE O PRIMEIRO

console.log(techs.slice(1, 3)) //SELECIONA ELEMENTOS CORTANDO

techs.splice(1, 1) //REMOVE ELEMENTOS ESPECIFICOS (INDEX, QUANTIDADE A PARTIR DO INDEX)

//ENCONTRAR POSIÇÃO

let index = techs.indexOf("js")
console.log(index)

console.log(techs)
