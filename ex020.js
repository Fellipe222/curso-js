let num = [2,2,3]

num[3] = 5 // Coloca o valor 5 no índice 3

num.push(7,5,"@","a","r","b") // Coloca os valores nos últimos índices

num.length // não é necessário colocar parênteses

num.sort() // organiza os valores em ordem crescente, prioriza números, caracteres especiais e letras, respectivamente

console.log(`Nosso vetor é o ${num} `)
console.log(`O vetor tem ${num.length} valores`)
console.log(`O terceiro vetor é o ${num[2]}`)
/*
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[...])
Para que isto não seja necessário, temos que fazer alguma estrutura de repetição para alterar somente o valor do índice.
Para isto, faremos:

 
for (c = 0; c < num.length ; c++){
    
    console.log(`<em>|| Vetor ${c} : ${num[c]} ||</em>`)
}// Esta estrutura de repetição se chama PERCURSO PARA EXEBIÇÃO DE VETOR
*/

for (let c in num){ // lê-se: para cada "c" dentro de "num", faça{comando}, este comando só funciona com arrays e objects
    console.log(`|| Vetor ${c} : ${num[c]} ||`)
    console.log(`o>~~~~~~~~~~~~~<o`)
}
 console.log(`O valor "${num[num.indexOf('@')]}" está armazenado no index "${num.indexOf('@')}"`)
 // caso o valor retornado pelo comando indexOf for "-1", significa que ele não encontrou o valor pesquisado
