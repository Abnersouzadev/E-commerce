let listaProdutos = document.querySelector(".lista-produtos")
let secaocarrinho = document.querySelector(".carrinho-vazio-cheio ")


for(let i = 0; i < data.length; i++){

    let elementoLista = document.createElement("li")

    elementoLista.id = "produto"

    let img = document.createElement("img")

    img.id = "imagem"

    img.src = data[i].img

    let descricao = document.createElement("span")

    descricao.id = "descriçao"

    let p = document.createElement("p")

    p.id = "categoria"

    p.innerText = data[i].tag

    let h2 = document.createElement('h2')

    h2.id = "nome"

    h2.innerText = data[i].nameItem

    let pDescricao = document.createElement("p")

    pDescricao.id = "descricao-produto"

    pDescricao.innerText = data[i].description

    let preco = document.createElement("span")

    preco.id = "preço"

    preco.innerText =  `R$ ${data[i].value},00`  

    let button = document.createElement("button")

    button.id = data[i].id

    button.classList.add("botao-add")

    button.innerText = data[i].addCart

    descricao.appendChild(p)

    descricao.appendChild(h2)

    descricao.appendChild(pDescricao)
    
    descricao.appendChild(preco)

    descricao.appendChild(button)
    
    elementoLista.appendChild(img)

    elementoLista.appendChild(descricao)

    listaProdutos.appendChild(elementoLista)

}





listaProdutos.addEventListener("click", interceptandoProduto)
secaocarrinho.addEventListener("click", interceptandoProdutoCarrinho)


let carrinhoCompras = []

console.log(carrinhoCompras)


function interceptandoProduto(event){

    let btnComprar = event.target

    if(btnComprar.className == "botao-add"){
       
        let idProduto = btnComprar.id
        
        let produto = data.find(function(produto){

            if(produto.id == idProduto){
                return produto
            }

        })
        adicionarCarrinho(produto)
    }

}

function interceptandoProdutoCarrinho(event){

    let btnRemover = event.target

    if(btnRemover.tagName == "BUTTON"){
       
        let idProduto = btnRemover.id
        
        let produto = data.find(function(produto){

            if(produto.id == idProduto){
                return produto
            }

        })
        // removerProdutoCarrinho(produto)
    }

}

function adicionarCarrinho(produto){
    
    secaocarrinho.innerHTML = ""

    carrinhoCompras.push(produto)
    listarProdutos(carrinhoCompras, secaocarrinho)

}






function listarProdutos(listaProdutos, secao){

    secao.innerHTML = ""

    for(let i = 0; i<listaProdutos.length; i++){

        let produto = listaProdutos[i]

        let card = criarCardProduto(produto)
        
        secao.appendChild(card)
    }

}

function criarCardProduto(produto){

    let img = produto.img 
    let nome = produto.nameItem
    let preco = produto.value

    let tagLi = document.createElement("li")
    let tagImg = document.createElement("img")
    let tagNome = document.createElement("h2")
    let tagPreco = document.createElement("p")
    let button = document.createElement("button")

    tagLi.id = "carrinho-item"
    tagImg.id = "carrinho-img"
    tagNome.id = "carrinho-nome"
    tagPreco.id = "carrinho-preco"
    


    tagImg.src = img
    tagNome.innerText = nome
    tagPreco.innerText = `R$ ${preco},00`
    button.innerText = "Remover do carrinho"

    button.addEventListener("click", function(event){
        
        let removeItem = event.target.parentNode
        removeItem.remove()
    })
    
    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)
    tagLi.appendChild(button)

    return tagLi

}

