"use strict";
// multiplicação
const resul = (numb1 = 0, numb2 = 0) => numb1 * numb2;
// saldação
const final = (nome = '', numb1 = 0, numb2 = 0) => {
    // nova const para chamar o esul
    const resultado = resul(numb1, numb2);
    return `---Oi! ${nome}, a multiplicação de ${numb1} e ${numb2}, resulta em ${resultado}`;
};
console.log(final('murilo', 25, 0.6));
