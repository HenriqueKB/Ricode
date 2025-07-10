function calcular() {
    let receitaAnual = parseFloat(document.getElementById('receita').value.replace(',', '.'));

    let porteEmpresa = document.getElementById('porteEmpresa').value;

    let tipoServico = document.getElementById('tipoServico').value;
    //Aqui é onde são definidas as variáveis que irão ajudar a calcular o preço do serviço.

    //Agora vem o cálculo.
    let precoBase = 0;

    if (tipoServico === 'institucional') precoBase = 1499;
    else if (tipoServico === 'ecommerce') precoBase = 2499;
    else if (tipoServico === 'portal') precoBase = 3499;

    let multiplicador = 1;
    if (porteEmpresa === 'pequeno') multiplicador = 1;
    else if (porteEmpresa === 'medio') multiplicador = 1.5;
    else if (porteEmpresa === 'grande') multiplicador = 2;

    let precoFinal = (precoBase + receitaAnual * 0.02) * multiplicador;

    document.getElementById('resultado').innerHTML = 'O preço do serviço é: R$ ' + precoFinal.toFixed(2);
}





