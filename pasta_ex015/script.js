/*function verificar(){
    var data = new Date()
    var dataAtual = data.getFullYear()
    var anonasc = Number((window.document.getElementById('anonasc')).value)
    var idade = dataAtual-anonasc
    var info = window.document.getElementById('res')
    var sexo = window.document.getElementsByName('radsex')
    var foto = window.document.getElementById('foto')

    if (anonasc == 0 || anonasc > dataAtual){
        window.alert('ERRO: Verifique se as informações estão corretas')
    }
    if (idade >=0 && idade <= 12){
        if (sexo[0].checked){ // Também seria possível verificar qual botão foi selecionado pelo comando: sexo[0].checked
            info.innerHTML = `Você é um bebê de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "bebe_menino.jpg" style = "border-radius: 25%;">'
        }else if (sexo[1].checked){
            info.innerHTML = `Você é uma bebê de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "bebe_menina.jpg" style = "border-radius: 25%;">'
        }
    }else if (idade > 12 && idade <= 18){
        if (sexo[0].checked){
            info.innerHTML = `Você é um adolescente de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "jovem_homem.jpg" style = "border-radius: 25%;">'
        }else if (sexo[1].checked){
            info.innerHTML = `Você é uma adolescente de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "jovem_menina.jpg" style = "border-radius: 25%;">'
        }
    }else if (idade > 18 && idade <= 65){
        if (sexo[0].checked){
            info.innerHTML = `Você é um adulto de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "adulto.jpg" style = "border-radius: 25%;">'
        }else if (sexo[1].checked){
            info.innerHTML = `Você é uma adulta de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "adulta.jpg" style = "border-radius: 25%;">'
        }
    }else{
        if (sexo[0].checked){
            info.innerHTML = `Você é um idoso de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "idoso.jpg" style = "border-radius: 25%;">'
        }else if (sexo[1].checked){
            info.innerHTML = `Você é uma idosa de ${idade} anos de idade!`
            foto.innerHTML = '<img src = "idosa.jpg" style = "border-radius: 25%;">'
        }
    }

}*/

function verificar(){
    var data = new Date()
    var dataAtual = data.getFullYear()
    var anonasc = Number((window.document.getElementById('anonasc')).value)
    var idade = dataAtual-anonasc
    var info = window.document.getElementById('res')
    var sexo = window.document.getElementsByName('radsex')
    var foto = window.document.getElementById('foto')
    var complemento = ''
    var sujeito = ''
    var nomeImagem = ''

    if (anonasc == 0 || anonasc > dataAtual){
        window.alert('ERRO: Verifique se as informações estão corretas')}

    if (idade >=0 && idade <= 2){
        if (sexo[0].checked){ 
            complemento = 0
        }else if (sexo[1].checked){
            complemento = 1        }
    }else if (idade > 2 && idade <= 12){
        if (sexo[0].checked){
            complemento = 2
        }else if (sexo[1].checked){
            complemento = 3        }
    }else if (idade > 12 && idade <= 18){
        if (sexo[0].checked){
            complemento = 4
        }else if (sexo[1].checked){
            complemento = 5        }
    }else if (idade > 18 && idade <= 65){
        if (sexo[0].checked){
            complemento = 6
        }else if (sexo[1].checked){
            complemento = 7        }
    }else{
        if (sexo[0].checked){
            complemento = 8
        }else if (sexo[1].checked){
            complemento = 9        }
    }

    switch (complemento){
        case 0:
            sujeito = "um bebê"
            nomeImagem = "bebe_menino"
            break
        case 1:
            sujeito = "uma bebê"
            nomeImagem = "bebe_menina"
            break
        case 2:
            sujeito = "um garoto"
            nomeImagem = "garoto"
            break
        case 3:
            sujeito = "uma garota"
            nomeImagem = "garota"
            break
        case 4:
            sujeito = "um adolescente"
            nomeImagem = "jovem_homem"
            break
        case 5:
            sujeito = "uma adolescente"
            nomeImagem = "jovem_menina"
            break
        case 6:
            sujeito = "um adulto"
            nomeImagem = "adulto"
            break
        case 7:
            sujeito = "uma adulta"
            nomeImagem = "adulta"
            break
        case 8:
            sujeito = "um idoso"
            nomeImagem = "idoso"
            break
        case 7:
            sujeito = "uma idosa"
            nomeImagem = "idosa"
            break
    }
    info.innerHTML = `Você é ${sujeito} de ${idade} anos de idade!`
    foto.innerHTML = `<img src = "${nomeImagem}.jpg" style = "border-radius: 25%;">`
    
    // Se quiser atribuir uma imagem no HTML, pelo JavaScript, era só digitar:
    // var foto = window.document.createElement('img')
    // foto.setAttribute('id','foto')

    //Depois para informar o caminho da imagem é só fazer:
    // img.setAttibute('src','nome_do_arquivo')

    // Depois para inserir esta imagem no HTML, fazemos:
    // res.appendChild(img)

}