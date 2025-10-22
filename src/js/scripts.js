function calcularPrecoFinal(nomeCliente , valorCompra) {
    if (valorCompra <= 500){
        console.log(`Cliente ${nomeCliente} fez uma compra de R$${valorCompra}. Desconto aplicado: 5%. Valor final: R$${valorCompra - (valorCompra * 0.05)}.`)
        alert(`Cliente ${nomeCliente} fez uma compra de R$${valorCompra}.\n\nDesconto aplicado: 5%.\nValor final: R$${valorCompra - (valorCompra * 0.05)}.`)
        //finalPreco = preco - (preco * 0.05)
    }
    else if (valorCompra <= 1000){
        console.log(`Cliente ${nomeCliente} fez uma compra de R$${valorCompra}. Desconto aplicado: 10%. Valor final: R$${valorCompra - (valorCompra * 0.1)}.`)
        alert(`Cliente ${nomeCliente} fez uma compra de R$${valorCompra}.\n\nDesconto aplicado: 10%.\nValor final: R$${valorCompra - (valorCompra * 0.1)}.`)
        //finalPreco = preco - (preco * 0.1)
    }
    else if (valorCompra > 1000){
        console.log(`Cliente ${nomeCliente} fez uma compra de R$${valorCompra}. Desconto aplicado: 15%. Valor final: R$${valorCompra - (valorCompra * 0.15)}.`)
        alert(`Cliente ${nomeCliente} fez uma compra de R$${valorCompra}.\n\nDesconto aplicado: 15%.\nValor final: R$${valorCompra - (valorCompra * 0.15)}.`)
        //finalPreco = preco - (preco * 0.15)
    }
    else {
        console.log(`Valor de compra inválido para o cliente ${nomeCliente}.`)
        alert(`Valor de compra inválido para o cliente ${nomeCliente}.`)
    }
}

//calcularPrecoFinal("Maria", 800);

function mostrarResultado() {
    const nome = document.querySelector('.nomeCliente').value;
    const valor = parseFloat(document.querySelector('.valorCompra').value);

    if (!nome || isNaN(valor)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    calcularPrecoFinal(nome, valor);
}