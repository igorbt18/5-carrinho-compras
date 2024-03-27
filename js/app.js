let totalGeral = 0;
limpar()

function adicionar() {
    //resgatando os dados do produto
    let produtoCarrinho = document.getElementById("produto");
    let quantidadeCarrinho = document.getElementById("quantidade");
    let produto  = (produtoCarrinho.value);
    //separando o nome do valor
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = parseInt(produto.split("R$")[1]);
    //Quantidade dos produtos 
    let quantidade = parseInt(quantidadeCarrinho.value);
    //preço total
    let valor = valorUnitario * quantidade
    //aplicando validações 
    if (quantidade <= 0) {
        alert("Digite uma quantidade valida!")
        return
    }
    //colocar item no carrinho
    let itemCarrinho = document.getElementById("lista-produtos")
    itemCarrinho.innerHTML = itemCarrinho.innerHTML +  `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  </section>`;
    // calculando valor total
    totalGeral = totalGeral + valor;
    let preco = document.getElementById("valor-total");
    preco.textContent = `R$${totalGeral}`
    //resetando a quantidade
    document.getElementById("quantidade").value = 0;
}


function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = 0;
    document.getElementById("quantidade").value = 0;
}
