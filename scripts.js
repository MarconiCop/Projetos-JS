//  IF AND ELSE

let temperature = 37.1
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=37


if(highTemperature){
    console.log("Está com febre alta.")

}   else if(mediumTemperature){
    console.log("Está com febre moderada.")

}   else{
    console.log("Não está com febre.")
}

//  SWITCH

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))


// THROW AND TRY CATCH

function sayMyName(name= ""){
    if(name === ""){
        throw "Nome é necessário"
    }
    console.log("Depois do erro!")
}


try{
    sayMyName()

}catch(e){

    console.log(e)
}