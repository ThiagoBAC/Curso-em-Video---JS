function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verefique os dados e tente novamente!`)
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'criança-homem.jpg')
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            }
            else {
                //velho
                img.setAttribute('src', 'velho-homem.jpg')
            }

        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'criança-mulher.jpg')
            }
            else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta-mulher.jpg')
            }
            else {
                //velho
                img.setAttribute('src', 'velha-mulher.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}