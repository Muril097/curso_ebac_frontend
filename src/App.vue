<script setup>
import { ref, computed } from 'vue';

const title = "Calculadora";
const number1 = ref(0);
const number2 = ref(0);
const operador = ref(0);

// Função de cálculo, com o computed
const resultado = computed(() => {
  if (operador.value === 1) {
    if (number2.value === 0) {
      return "Erro: Divisão por zero";
    } else {
      return number1.value / number2.value;
    }
  } else if (operador.value === 2) {
    return number1.value * number2.value;
  } else if (operador.value === 3) {
    return number1.value - number2.value;
  } else if (operador.value === 4) {
    return number1.value + number2.value;
  }
  return 0;
});

// Função para definir operador
function atualizarOperador(valor) {
  operador.value = valor;
}
</script>

<template>
  <div>
  <h1>{{ title }}</h1>
  
  <!-- Inputs dos números -->
  <input type="number" v-model="number1" />
  <input type="number" v-model="number2" />
  
  <!-- Botões dos operadores -->
  <button @click="atualizarOperador(1)">/</button>
  <button @click="atualizarOperador(2)">*</button>
  <button @click="atualizarOperador(3)">-</button>
  <button @click="atualizarOperador(4)">+</button>
  
  <!-- igual -->
  <button @click="calc()">=</button>
  
  <!-- Botão pra limpar -->
  <button disabled @click="number1.value = number2.value = operador.value = 0; resultado.value = 0">C</button>
  
  <!-- resultado -->
  <h2>{{ resultado }}</h2>
  </div>
</template>

<style scoped>

div {
  width: 600px;
  margin: 0 33vw;
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  font-size: 60px;
  
  font-family:sans-serif;
}
input {
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 492px;
  height: 100px;
  margin-bottom: 10px;
  font-size: 60px;

  
}
button{
  justify-items: center;
  width: 156px;
  height: 80px;
  font-size: 60px;
  margin: 5px;

}
h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  font-size: 60px;
  margin: 0;
  font-family:sans-serif;

}
</style>
