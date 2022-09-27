// ESTRUTURAS DE REPETIÇÃO

//  FOR

for(let i = 1; i<=10; i++){
    if(i == 5){
        continue; // pula a execução do momento
        // break; -> sai do loop
    }
    console.log(i)


}

//  WHILE (Quando não sabe-se o momento da parada)

let j = 100000000

while(j > 10){
    console.log(j)
    j /= 10
}

//  FOR OF

let name = "Marconi"
let names = ["João","Paulo","Pedro"]

for (let char of name){
    console.log(char)
}

for (let name of names){
    console.log(name)
}

// FOR IN (Para objetos)

let person = {
    name: "Marconi",
    age: 22,
    weight: 70.1
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}