
//  FUNCTION EXPRESSION OR FUNCTION ANONYMOUS


//  PARAMETERS

const sum = function(number1, number2){
    let total = number1 + number2 
    return total
}

sum(2, 3) // ARGUMENTS

let number1 = 34
let number2 = 25

let totalSum = sum(number1, number2) 

console.log(`O número 1 é ${number1}.`)
console.log(`O número 2 é ${number2}.`)
console.log(`A soma é ${totalSum}.`)

// FUNCTION SCOPE

let subject = "Create Video"

function createThink(subject){
    subject = "study"
    return subject
}

console.log(createThink(subject))
console.log(subject)

//FUNCTION HOISTING

sayMyName(); 

function sayMyName(){
    console.log("Marconi")
}

//  ARROW FUNCTION

const sayMyNameArrow = (name) => {
    console.log(`Marconi ${name}`)
}

sayMyNameArrow("Copati")


//  CALLBACK FUNCTION

function sayMyNameCall(name){
    console.log("Antes de executar a callback")

    name() // IMPRIME A FUNÇÃO POIS O ARGUMENT ERA UMA FUNÇÃO

    console.log("Depois de executar a callback")
}

sayMyNameCall(
    () => {
        console.log("Estou em uma callback")
    }
)


//  FUNCTION CONSTRUCTOR

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name +  " está andando!"
    }
}

const marconi = new Person("Marconi")
console.log(marconi.walk())





