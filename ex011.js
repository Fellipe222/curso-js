var idade = 64
console.log(`Voce tem ${idade} anos.`)
/*
if (idade < 16){
    console.log('Não vota')
}else{
    if (idade >= 16 && idade < 18 || idade > 65){
        console.log('O voto é opicional')
    }else{
        console.log('O voto é obrigatório')
    }
}*/
// AMBOS OS CÓDIGOS APRESENTAM O MESMO RESULTADO!
if (idade < 16){
    console.log('Não vota')
}else if (idade < 18 || idade > 65){ 
    console.log('O voto é opicional')
}else{
    console.log('O voto é obrigatório')
}
