function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "media/manha-250.png"
        document.body.style.background = '#A0A97A'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = "media/tarde-250.png" 
        document.body.style.background = '#AD6626' 
    } else {
        //BOA NOITE
        img.src = "media/noite-250.png"
        document.body.style.background = '#1E3455'
    }
}