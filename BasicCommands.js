console.log("9" + 5) //TYPE COERSION
console.log(Number("9") + 5) //TYPE CONVERSION

// TYPE CONVERSION

let string = "123"
console.log(Number(string))

let number = 32
console.log(String(number))

//  LENGTH

let word = "Paralelepipedo"
console.log(word.length)

console.log(String(number).length)

//  TO FIXED AND REPLACE 

let numberBroke = 174697826856.65856485
console.log(numberBroke.toFixed(2).replace(".",","))


//  UPPER AND LOWER

let palavra = "Programar é muito bacana!"
console.log(palavra.toUpperCase())
console.log(palavra.toLowerCase())

//  SPLIT AND JOIN

let text = "Eu quero viver o Amor!"
let myArray = text.split(" ")
console.log(myArray)

let newText = myArray.join("_") // TRANSFORMA O ARRAY EM TEXTO E JUNTA
console.log(newText)

//  INCLUDES

 let especificWord = "Eu quero viver!"
 console.log(especificWord.includes("Amor"))


//  ARRAY WITH CONSTRUCTOR

let arrayWithConstructor = new Array("a","b","c")
console.log(arrayWithConstructor)

console.log(["a","b","c"].length)

// FROM

let newWord = "manipulação"

console.log(Array.from(newWord))



