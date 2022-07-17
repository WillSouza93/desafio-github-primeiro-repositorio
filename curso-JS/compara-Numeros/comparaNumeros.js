function comparaNumeros (num1, num2) {
    if (!num1 || !num2) return 'Defina dois números!';

    const frase1 = resultadoFrase1 (num1, num2);
    const frase2 = resultadoFrase2 (num1, num2);

    return `${frase1} ${frase2}`;
}

function resultadoFrase1 (num1, num2) {
    let iguais = '';

    if (num1 !== num2) {
        iguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${iguais} são iguais.`;
}

function resultadoFrase2 (num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20!`;
}

console.log (comparaNumeros(5, 5));