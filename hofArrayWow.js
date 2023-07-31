const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//const nomes = []

//for (let i = 0; i < personagens.length; i++) {  (MANEIRA SEM USAR HOF)
//  const personagem = personagens[i]
//  nomes.push(personagem.nome)
//}

// map: permite obter um novo array a partir de um array existente, ou seja, vai criar o array personagem a partir do array personagens 
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

// Filter

//const orcs = []

//for (let index = 0; index < personagens.length; index++) {
//    if (personagens[index].raca === "Orc"){
//        orcs.push(personagens[index])
//    }
//    
//}


// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"

})


//console.log(orcs)

//Reduce

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0) // valor 0 equivale o valor Acumulado inicial

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado, personagem){

    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }
    else 
        valorAcumulado[personagem.raca] === personagem

    return valorAcumulado    


},{}) // valor {} equivale o valor Acumulado inicial 

console.log(racas)

const classes = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.classe]){
        valorAcumulado[personagem.classe].push(personagem)
    }
    else {
        valorAcumulado[personagem.classe] === personagem
    }
    return valorAcumulado    
},
{}
)

console.log(classes)