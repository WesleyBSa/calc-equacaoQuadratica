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

    if (delta < 0) {
        resultadoDiv.innerHTML += `<p>Como Δ é negativo (${delta}), a equação não possui raízes reais.</p>`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultadoDiv.innerHTML += `<p>x1 = (-${b} + √${delta}) / (2 * ${a})</p>`;
        resultadoDiv.innerHTML += `<p>x1 = ${x1}</p>`;
        resultadoDiv.innerHTML += `<p>x2 = (-${b} - √${delta}) / (2 * ${a})</p>`;
        resultadoDiv.innerHTML += `<p>x2 = ${x2}</p>`;
    }
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('resultado').innerHTML = '';
});
