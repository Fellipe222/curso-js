function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var horaAtual = data.getHours()
    
    

    if (horaAtual >= 0 && horaAtual < 12){
        if(horaAtual == 1){
            msg.innerHTML = `Agora é ${horaAtual} hora da manhã.`
            foto.innerHTML = '<img src="manha.png" style = "border-radius: 50%;">'
            document.body.style.background = '#e2cd9f'
        }else{
        msg.innerHTML = `Agora são ${horaAtual} horas da manhã.`
        foto.innerHTML = '<img src="manha.png" style = "border-radius: 50%;">'
        document.body.style.background = '#e2cd9f'}        
    }else if (horaAtual >= 12 && horaAtual < 18){
        msg.innerHTML = `Agora são ${horaAtual} horas da tarde.`
        foto.innerHTML = '<img src="tarde.png" style = "border-radius: 50%;">'
        document.body.style.background = '#b9846f'
    }else{
        msg.innerHTML = `Agora são ${horaAtual} horas da noite.`
        foto.innerHTML = '<img src="noite.png" style = "border-radius: 50%;">'
        document.body.style.background = '#515154'}
        
    }