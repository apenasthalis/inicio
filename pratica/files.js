/*class livro {
    constructor (nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas 
    }
    anunciartitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descrevertitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

const eusla = new livro("a caverna em expansão", "uniclap", 70)
eusla.anunciartitulo()
eusla.descrevertitulo()

class livrocolecao extends livro {
    constructor (nome, nomecolecao){
        super(nome)
        this.nomecolecao = nomecolecao
    }
    descrevercolecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomecolecao}`)
    }
}

const passarinhos = new livrocolecao ("passarinhos sem asas", "passarinhos")
passarinhos.descrevercolecao()*/

let novoparagrafo = document.createElement("p")
let texto = document.createTextNode("morro do doende")
novoparagrafo.appendChild(texto)
console.log(novoparagrafo)

let body = document.querySelector("body")
console.log(body)
body.appendChild(novoparagrafo)

let sla = document.getElementById("sla")
console.log(sla)

let ele = document.createElement("span")
ele.appendChild(document.createTextNode("texto do span"))
console.log(ele)
sla.appendChild(ele)
