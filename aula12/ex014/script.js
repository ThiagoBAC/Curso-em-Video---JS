   
    var data = new Date()
    var hora = data.getHours()

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')



    
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'manhã.jpg'
        document.body.style.background = '#b8ced9'
        msg.innerHTML = `Agorão são ${hora} horas da manhã.`  
                      
    } 
    else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = '#ffe489'
        msg.innerHTML = `Agorão são ${hora} horas da tarde.`  
    }
    else{
        // Boa Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#01414a'
        msg.innerHTML = `Agorão são ${hora} horas da noite.`  
    }

}


function amanhecer() {
    document.body.style.background = '#b8ced9'
}
    
function entardecer() {
    document.body.style.background = '#ffe489'
}

function anoitecer() {
    document.body.style.background = '#01414a'
}