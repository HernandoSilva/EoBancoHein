function executarExtrato(){

    var extratoString = window.extrato ? window.extrato.join('\n'): 'Nenhum registro no extrato.';
    alert(`Extrato:\n${extratoString}`)

}