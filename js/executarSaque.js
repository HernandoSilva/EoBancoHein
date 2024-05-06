function executarSaque() {
    var saque = parseFloat(prompt(`Digite o valor que deseja sacar: `))
    window.saque = saque

    if (window.saque >= window.saldo) {
        alert(`Operação não autorizada. Valor do saque maior que o saldo.`)
    } else {
        window.saldo -= window.saque;
        alert(`Foram sacados R$${window.saque}. Novo saldo: R$${window.saldo}.`)

        var data = new Date();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var registro = `\nCompra realizada em: FastFoodLTDA | -R$ 60,00\n4/2024 | Pix recebido: GabrielAugusto | R$ 200,00\n5/2024 | Pix recebido: TigreLTDA - R$ 500,00\n5/2024 | Boleto Pago: Faculdade Flamingo | -R$ 375,00\n${mes}/${ano} | Saque realizado | -R$${window.saque.toFixed(2)}`;
        adicionarAoExtrato(registro);
    }
}

function adicionarAoExtrato(registro){
    if(!window.extrato){
        window.extrato = [];
    }
    window.extrato.push(registro);
}

