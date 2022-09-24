//  EXPRESSIONS AND OPERATORS

let number = 1

console.log(number + 1) //BINARY
console.log(++number)   //UNARY
console.log(true ? "alo" : "nada") //TERNARY


// NEW

let name = new String("Marconi")
name.surName = "Copati"
let age = new Number(22)
let date = new Date() //PODE COLOCAR DATA COMO ARGUMENTO
console.log(name, age, date)

//  UNARY - DELETE

const person = {
    name: "Marconi",
    age: 22,
}

delete person.age

console.log(person)
console.log("------------------")

//  OPERATORS

console.log((3.2 * 3).toFixed(2)) //MULTIPLICAÇÃO
console.log((3.2 / 3).toFixed(2)) //DIVISÃO
console.log((3.2 + 3).toFixed(2)) //SOMA
console.log((3.2 - 3).toFixed(2)) //SUBTRAÇÃO
console.log((3.2 % 3).toFixed(2)) //RESTO

let increment = 0
let decrement = 1

increment++
decrement--


console.log(increment) //INCREMENTO
console.log(decrement) //DECREMENTO
console.log(3 ** 2) //EXPONENTIATION

//GROUPING OPERATOR

let total = (2 + 3) * 5
let total2 = ("alo" + "voce")
console.log(total, total2) 

//COMPARING OPERATORS

let one = 1
let two = 2


console.log(one == two) //FALSE
console.log(one == "1") //TRUE 
console.log(one != two) //DIFERENTE
console.log(one === 1) //ESTRITAMENTE IGUAL (COMPARA OS TIPOS E O VALOR)
console.log(one !== "1") //ESTRITAMENTE DIFERENTE (COMPARA OS TIPOS E O VALOR)

console.log(one > two) //MAIOR QUE
console.log(one >= 1) //MAIOR IGUAL QUE
console.log(one < two) //MENOR QUE
console.log(one <= 1) //MENOR IGUAL QUE

//  ASSIGNMENT OPERATORS

let x

x = 1 //ASSIGNMENT
x += 2 //ADDITION ASSIGMENT
x -= 1 //SUBTRACTION ASSIGNMENT
x *= 2 //MULTIPLICATION ASSIGNMENT
x /= 2 //DIVISION ASSIGMENT
x %= 2 //REMINDER ASSIGNMENT
x **=2 //EXPONENCIATION ASSIGMENT
console.log(x)

//  LOGICAL OPERATORS

let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao && !queijo)

//TERNARY

const niceBreakfast = pao && queijo ? "Café top" : "Café ruim"
console.log(niceBreakfast)

const canDrive = age >= 18 ? "Pode dirigir" : "Não pode dirigir"
console.log(canDrive)

//STRING OPERATOR

let ab = "a"
console.log(ab + "b" + 2)
console.log(ab += "b" + 2)

//FALSY AND TRUTHY

//FALSY
console.log(false ? "TRUE" : "FALSE")
console.log(0 ? "TRUE" : "FALSE")
console.log(-0 ? "TRUE" : "FALSE")
console.log("" ? "TRUE" : "FALSE")
console.log(null ? "TRUE" : "FALSE")
console.log(undefined ? "TRUE" : "FALSE")
console.log(NaN ? "TRUE" : "FALSE")

//TRUTHY
console.log(true ? "TRUE" : "FALSE")
console.log({} ? "TRUE" : "FALSE")
console.log([] ? "TRUE" : "FALSE")
console.log(1 ? "TRUE" : "FALSE")
console.log(3.23 ? "TRUE" : "FALSE")
console.log("0" ? "TRUE" : "FALSE")
console.log("false" ? "TRUE" : "FALSE")
console.log(-1 ? "TRUE" : "FALSE")
console.log(Infinity ? "TRUE" : "FALSE")
console.log(-Infinity ? "TRUE" : "FALSE")

//OPERATOR PRECEDENCE

// () 
//  ! ++ --
// * / 
// + -
// < <= > >=  CUIDADO (3>2>1 É FALSO POIS 3>2 É TRUE E TRUE>1 É FALSO)
// == != === !==
// &&
// ||
// ?:
// = += -= *=
