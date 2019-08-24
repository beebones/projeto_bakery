//mostrando ou escondendo o menu do carrinho
const botaoCarrinho = document.getElementById('cart-info');
const menuCarrinho = document.getElementById('cart');
//console.log(menuCarrinho);

botaoCarrinho.addEventListener('click', function() {
    menuCarrinho.classList.toggle('show-cart');
})

const botaoAddProduto = document.querySelectorAll('.store-item-icon');
botaoAddProduto.forEach(function(botao) {
    botao.addEventListener('click', function(event) {
        if(event.target.parentElement.classList.contains('store-item-icon')) {
            //console.log(event.target.parentElement);
            let caminhoImagemCompleto = event.target.parentElement.previousElementSibling.src;
            const caminhoImagem = tratarCaminhoImagem(caminhoImagemCompleto);
            const precoProduto = event.target.parentElement.parentElement.parentElement;
            const precoProdutoSelecionado = tratarPrecoProduto(precoProduto);
            //console.log(precoProdutoSelecionado);
            //enviando dados da imagem e preço do produto clicado para minha função
            inserirProdutoCarrinho(caminhoImagem, precoProdutoSelecionado);
        }
    });
});

//tratando o caminho da imagem para trazer apenas o nome da imagem
tratarCaminhoImagem = function(caminhoImagemCompleto) {
    const indexCaminhoImagemCompleto = caminhoImagemCompleto.indexOf('img') + 3;
    const caminhoReduzioImagem = caminhoImagemCompleto.slice(indexCaminhoImagemCompleto);
    return caminhoReduzioImagem;
}

tratarPrecoProduto = function(precoProduto) {
    //console.log(precoProduto.dataset.price);
    const precoDataProduto = parseInt(precoProduto.dataset.price);
    //console.log(precoDataProduto);
    return precoDataProduto;
}

inserirProdutoCarrinho = function(caminhoImagem, precoProduto) {
    const divProdutoInserido = document.createElement('div');
    divProdutoInserido.classList.add(
        'cart-item',
        'd-flex',
        'justify-content-between',
        'text-capitalize',
        'my-3'
    );
    const templateProdutoCarrinho = `<img src="img-cart${caminhoImagem}" class="img-fluid rounded-circle" id="item-img" alt="">
    <div class="item-text">
      <p id="cart-item-title" class="font-weight-bold mb-0">preço</p>
      <span>$</span>
      <span id="cart-item-price" class="cart-item-price" class="mb-0">${precoProduto}</span>
    </div>
    <a href="#" id='cart-item-remove' class="cart-item-remove">
      <i class="fas fa-trash"></i>
    </a>`;
    //console.log(divProdutoInserido);
    divProdutoInserido.innerHTML = templateProdutoCarrinho;
    const carrinho = document.getElementById('cart');
    const totalCarrinho = document.querySelector('.cart-total-container');
    carrinho.insertBefore(divProdutoInserido, totalCarrinho);
    alert('Produto adicionado ao carrinho');
    const quantidadeProdutosCarrinho = document.getElementById('item-count');
    const quantidadeProdutosCarrinhoNumber = parseInt(quantidadeProdutosCarrinho.innerText) + 1;
    console.log(quantidadeProdutosCarrinhoNumber);
    quantidadeProdutosCarrinho.innerHTML = quantidadeProdutosCarrinhoNumber;
}