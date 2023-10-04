function contar(){
    let inicio = document.getElementById('inici')
    let fim = document.getElementById('fi')
    let passo = document.getElementById('pass')
    let res =  document.getElementById('ress')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert('[erro] tente novamente')
    } else {
        res.innerHTML = 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c}` 
        }

    }
}