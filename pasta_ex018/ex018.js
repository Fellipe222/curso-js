function contar() {

    // Podemos utilizar como forma alternativa, o "let" ao invés do "var"

    var inicio = Number((window.document.getElementById('inicio')).value)
    var fim = Number((window.document.getElementById('fim')).value)
    var intervalo = Number((window.document.getElementById('intervalo')).value)
    var resposta = window.document.getElementById('resposta')

    if (inicio == '' || fim == '' || intervalo == '' || inicio >= fim) {
        window.alert('ERRO: preencha os campos corretamente')
    } else {
        if (intervalo <= 0) {
            window.alert('Passo inválido, consirando passo 1...')
            intervalo = 1
        }
        resposta.innerHTML = 'Contando: <br>'
        for (inicio; inicio <= fim; inicio += intervalo) {
            resposta.innerHTML += `${inicio} \u{1F449}`
            // Os emojis foram retirados do site:
            // https://unicode.org/emoji/charts/full-emoji-list.html
            // O código que aparece no site é "U+1F449", tiramos o "U+". O restante do código colocamos entre \u{"código"}

            //console.log(`${inicio}`)
            //console.log('Fim')
        }


    }
    resposta.innerHTML += `Fim \u{1F60E}`

}
