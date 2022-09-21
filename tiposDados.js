
//  PRIMITIVOS (Não são objetos e são imutáveis)

    //  STRINGS
        console.log("'Usando aspas simples dentro de aspas duplas'")
        console.log('"Usando aspas duplas dentro de aspas simples"')
        console.log(`Usando crases 
                                em multi linhas`)
        console.log(`Resultado de 1 + 1:  ${1 + 1}`) 

    //  NUMBERS 
        console.log(33)       
        console.log(12.5 + 33)       
        console.log(12.5 / "abc")        
        console.log(12.5 === Infinity)       
        console.log(Infinity)  //   Apenas "I" maiúsculo

    //  BOOLEANS
        console.log(true)
        console.log(false)

    //  UNDEFINED 
        console.log(undefined)
        console.log(null) //    Objeto sem nada dentro
        console.log(null === undefined)


//  ESTRUTURAIS

    //  OBJETO

        //  ARRAYS
        console.log({
            name: "Marconi",
            idade: 22,
            andar: function(){
                console.log("Andar")
            }
        })

        console.log(["Leite", "Ovos", 2, 3])

    // FUNÇÃO

//  PRIMITIVO ESTRUTURAL

    console.log(null) //    Objeto sem nada dentro