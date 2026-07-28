function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#9d9ea3'
    }else if (hora >= 12 && hora < 18){
            img.src = 'fototarde.png'
            document.body.style.backgroundColor = '#d27b44'
    }else {
         img.src = 'fotonoite.png'
         document.body.style.backgroundColor = '#081645'
}
} 