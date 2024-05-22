document.getElementById('calcular').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultadoDiv.innerHTML = 'Por favor, insira valores válidos para a, b e c.';
        return;
    }

    const delta = b * b - 4 * a * c;
    resultadoDiv.innerHTML += `<p>Δ = ${b}² - 4 * ${a} * ${c}</p>`;
    resultadoDiv.innerHTML += `<p>Δ = ${delta}</p>`;

    if (isNaN(delta)) {
        resultadoDiv.innerHTML += `<p><em>O delta é indefinido (NaN), a equação não possui raízes reais.</em></p>`;
    } else if (!isFinite(delta)) {
        resultadoDiv.innerHTML += `<p><em>O delta é infinito, a equação não possui raízes reais.</em></p>`;
    } else if (delta < 0) {
        resultadoDiv.innerHTML += `<p><em>Como Δ é negativo (${delta}), a equação não possui raízes reais.</em></p>`;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultadoDiv.innerHTML += `<p><em>Como Δ é zero (${delta}), a equação possui uma única raiz real igual.</em></p>`;
        resultadoDiv.innerHTML += `<p>x = -${b} / (2 * ${a})</p>`;
        resultadoDiv.innerHTML += `<p>x = ${x}</p>`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        // Verificando se x1 ou x2 são NaN ou infinito
        if (isNaN(x1) || isNaN(x2) || !isFinite(x1) || !isFinite(x2)) {
            resultadoDiv.innerHTML += `<p><em>A equação não possui raízes reais.</em></p>`;
        } else {
            resultadoDiv.innerHTML += `<p><em>Como Δ é positivo (${delta}), a equação possui duas raízes reais e distintas.</em></p>`;
            resultadoDiv.innerHTML += `<p>x1 = (-${b} + √${delta}) / (2 * ${a})</p>`;
            resultadoDiv.innerHTML += `<p>x1 = ${x1}</p>`;
            resultadoDiv.innerHTML += `<p>x2 = (-${b} - √${delta}) / (2 * ${a})</p>`;
            resultadoDiv.innerHTML += `<p>x2 = ${x2}</p>`;
        }
    }
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('resultado').innerHTML = '';
});
