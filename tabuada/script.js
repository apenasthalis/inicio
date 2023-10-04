function chama(){
    let num = document.getElementById('num')
    let tabuada = document.getElementById('tab')
    if (num.value.lenght == 0){
        window.alert("digite!!!!!")
    } else{
        let n = Number(num.value)
        let c = 1
        while (c <= 10){
        let item = document.createElement("option")
        item.text = `${n} x ${c} = ${n*c}`
        tabuada.appendChild(item)
        c++
    }
    }
}