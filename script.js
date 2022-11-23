function verificar() {
    let mes = document.getElementById('month')
    let res = document.getElementById('res')
    if (mes.value.length == 0) {
        window.alert('COLOCA UM MÊS!')
        } else  {
            var month = Number(mes.value)
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (month == 5) {
                img.setAttribute('src', 'maio.png')
            } else if (month == 6) {
                img.setAttribute('src', 'junho.png')
            } else if (month == 7) {
                img.setAttribute('src', 'julho.png')
            } else if (month == 8) {
                img.setAttribute('src', 'agosto.png')
            } else if (month == 9) {
                img.setAttribute('src', 'setembro.png')
            } else if (month == 10) {
                img.setAttribute('src', 'outubro.png')
            } else if (month == 11) {
                img.setAttribute('src', 'novembro.png')
            } else if (month == 12) {
                img.setAttribute('src', 'dezembro.png')
            } else {
                res.innerHTML = 'Data Inválida!'
            }
            res.innerHTML = '<p></p>'
            res.innerHTML += `Minha lembrança com você! \u{1F970}`
            res.appendChild(img)
    }
}
