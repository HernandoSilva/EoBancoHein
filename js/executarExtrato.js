function executarExtrato(){

    var extratoString = window.extrato ? window.extrato.join('\n'): 'Nenhum registro no extrato.';
    alert(`Compra realizada em: FastFoodLTDA | -R$ 60,00\n4/2024 | Pix recebido: GabrielAugusto | R$ 200,00\n5/2024 | Pix recebido: TigreLTDA - R$ 500,00\n5/2024 | Boleto Pago: Faculdade Flamingo | -R$ 375,00\n${extratoString}`)

}