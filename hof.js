lista = ["Banana", "Maça", "Laranja", "Goiaba"]

function exibirElemento(elemento,indice,array){    
    console.log(
        elemento,
        indice,
        array
    )
}

for(i=0; i<lista.length; i++){ // Forma 1 
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento) // forma 2 

lista.forEach(function(elemento, indice, array){ // forma 3
    console.log({
        elemento,
        indice,
        array
    })
})