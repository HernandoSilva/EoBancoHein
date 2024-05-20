var saldo = 500

var nome = prompt(`Olá! Digite seu nome: `)

inicio();

function inicio() {
    var opcao = (prompt(`Olá ${nome}! O que deseja fazer hoje?\n\n1- Verificar Saldo\n2- Verificar Extrato\n3- Realizar Saque\n4- Realizar Depósito\n5- Realizar Transferência\n6- Sair `))

    if (opcao == '1') {
        verSaldo();
    } else if (opcao == '2') {
        extrato();
    } else if (opcao == '3') {
        saque()
    } else if (opcao == '4') {
        deposito();
    } else if (opcao == '5') {
        transferencia();
    } else if (opcao == '6') {
        sair();
    } else {
        alert(`Digite uma opção válida.`)
        inicio();
    }

}

function verSaldo() {
    senha();

    alert(`Seu saldo atual é: R$${saldo}.`)
    inicio();
}

function extrato() {
    senha();

    alert(`12/05 - Saque realizado: R$ 200.\n13/05 - Depósito realizado: R$ 700.\n14/05 - Saque realizado: R$ 200. `)
    inicio();
}

function saque() {
    senha();

    do {
        var valorSaque = parseFloat(prompt(`Digite o valor que deseja sacar: `))

        if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque > saldo) {
            erro(`Valor para saque inválido.`)
        }
    } while (isNaN(valorSaque) || valorSaque <= 0 || valorSaque > saldo);

    saldo -= valorSaque

    alert(`Foram sacados R$${valorSaque}.\nSaldo atual: ${saldo}`)
    inicio();
}

function deposito() {
    do {
        var valorDeposito = parseFloat(prompt(`Digite o valor que deseja depositar: `))

        if (isNaN(valorDeposito) || valorDeposito <= 0) {
            erro(`Valor para depósito inválido.`);
        }
    } while (isNaN(valorDeposito) || valorDeposito <= 0)

    saldo += valorDeposito

    alert(`Foram depositados R$${valorDeposito}.\nSaldo atual: ${saldo}`)
    inicio();
}

function transferencia() {
    senha();

    do {
        var numeroConta = parseFloat(prompt(`Digite o numero da conta que receberá a transferencia: `))
        if (isNaN(numeroConta)) {
            alert(`Por favor, insira um número válido.`)
        }
    } while (isNaN(numeroConta));

    var valorTransferencia = parseFloat(prompt(`Informe o valor para a transferência: `))

    do {
        if (isNaN(valorTransferencia) || valorTransferencia > saldo || valorTransferencia <= 0)
            erro(`Número inválido.`);
    } while (isNaN(valorTransferencia) || valorTransferencia > saldo || valorTransferencia <= 0)

    saldo -= valorTransferencia
    alert(`R$${valorTransferencia} foram transferidos para a conta ${numeroConta}.`)
    inicio();
}


function senha() {
    const senha = 3589
    var senhaInformada = parseInt(prompt(`Informe sua senha: `))
    if (senhaInformada != senha) {
        erro(`Senha incorreta.`);
    }
}

function erro(mensagem) {
    alert(`Operação não autorizada. ${mensagem}\nVoltando para o início ...`)
    inicio();
}
function sair() {
    alert(`${nome}, foi um prazer ter você por aqui!`);
}