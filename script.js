function verificar() {
   var data = new Date()
   var ano = data.getFullYear() // Full para pegar os quatro dígitos
   var fano = document.querySelector('#txtano')
   var res = document.querySelector('#res')

   if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto') // É o mesmo que ir no HTML e inserir-- <img id="foto">
    
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/pexels-bess-hamiti-83687-35537.jpg')
            // Criança
        }else if (idade < 21){
            img.setAttribute('src','imagens/pexels-sebastiaan9977-1304647.jpg')
            // Jovem
        }else if (idade < 50) {
            img.setAttribute('src', 'imagens/pexels-casnafu-31530118.jpg')
            //Adulto
        }else {
            img.setAttribute('src', 'imagens/pexels-hasanalbari-1652340.jpg')
            //idoso
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/pexels-nappy-1068205.jpg')
            // Criança
        }else if (idade < 21){
            img.setAttribute('src', 'imagens/pexels-pixabay-264614.jpg')
            // Jovem
        }else if (idade < 50) {
            img.setAttribute('src', 'imagens/pexels-joni-musi-391114634-31497416.jpg')
            //Adulto
        }else {
            //idoso
            img.setAttribute('src', 'imagens/pexels-olly-3768117.jpg')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   }
}