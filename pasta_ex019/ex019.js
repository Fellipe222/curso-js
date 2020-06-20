function calcular() {

    // Podemos utilizar como forma alternativa, o "let" ao invés do "var"

    var a = Number((window.document.getElementById('valor')).value)
    var resposta = window.document.getElementById('resposta')
    var b = 10
    var passo = 0
    //var resultado = ''

    if (a === ''){
        alert('Nenhum valor foi informado, indique um multiplicador.')
    }else{
        resposta.innerHTML = '' // '' limpa o select antes de executar o for
        for ( a ; passo <= b ; passo++){
            let item = document.createElement('option') 
            // Para inserir dados no select, é preciso criar options
            item.text = `${a} x ${passo} = ${a*passo}`
            // O valor do último campo de resultado, aceita equações. Não é necessário criar a variável "resultado"
            resposta.appendChild(item)
            // O appendChild adiciona o valor de item dentro do select, utilizado quando há a comunicação do algum banco de dados
            item.value = `tab${passo}`

            //resultado = a * passo
            //resposta.innerHTML = `${a} x ${passo} = ${resultado}<br>`
            //console.log(`${a} x ${passo} = ${resultado}`)
            
        }
    }
}
//calcular()