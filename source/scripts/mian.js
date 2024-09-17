document.getElementById('calcular').addEventListener('click', function() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 + numero2;

    document.getElementById('resultado').innerText = `A soma é = ${resultado}`;
});