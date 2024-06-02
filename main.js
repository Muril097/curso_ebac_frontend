const resu = document.getElementById('resu');
resu.addEventListener('submit', function(s){
    s.preventDefault();
    const numa = Number(window.document.getElementById('numa').value);
    const numb = Number(window.document.getElementById('numb').value);
    const resul = window.document.getElementById('resul')
    if (numb > numa){
        //validado
        resul.style.background = '#00aa39'
        resul.innerText = `o valor de B é ${numb} logo é maior que valor de A ${numa}`
    }
    if (numb == numa){
        //invalido igual
        resul.style.background = '#8b0000'
        resul.innerText = `o valor de B é ${numb} e igual ao valor de A ${numa}`
    }
    if (numb < numa){
        //invalido
        resul.style.background = '#8b0000'
        resul.innerText = `o valor de B é ${numb} logo é menor que valor de A ${numa}`
    }
});