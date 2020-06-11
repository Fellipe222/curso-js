var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 0 && hora < 12){
    console.log('Ainda está de manhã')
}else if (hora>=12 && hora < 18){
    console.log('Está de tarde...')
}else{console.log('Já está de noite...')}