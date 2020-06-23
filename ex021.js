function parimpar (n){
    if (n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
parimpar(5) // Se tentar rodar esse código, ele não irá funcionar. Será preciso criar uma variável

// Isso:
let res = parimpar()
console.log(res)
// É a mesma coisa que:
console.log(parimpar())