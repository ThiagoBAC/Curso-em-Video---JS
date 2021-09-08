
//var agora = new Date()
var hora = 6  //agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 0 && hora < 6) {
    console.log('Boa Madrugada!')
}
else if (hora > 5 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora > 11 && hora < 19) {
    console.log('Boa Tarde')
}
else if (hora > 18 && hora < 24) {
    console.log('Boa noite')
}
else {
    console.log('Vai dormir...')
}
