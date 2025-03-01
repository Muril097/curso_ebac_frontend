<script setup>
import { ref } from 'vue';

const title = "Calculadora";
const number1 = ref(0);
const number2 = ref(0);
const operador = ref(0);
const resultado = ref(0);

// Função de cálculo
function calc() {
  if (operador.value === 1) {
    if (number2.value === 0) {
    resultado.value = "Erro: Divisão por zero";
    } else {
    resultado.value = number1.value / number2.value;
    }
  } else if (operador.value === 2) {
    resultado.value = number1.value * number2.value;
  } else if (operador.value === 3) {
    resultado.value = number1.value - number2.value;
  } else if (operador.value === 4) {
    resultado.value = number1.value + number2.value;
  }
}

// Função para definir operador
function atualizarOperador(valor) {
  operador.value = valor;
}
</script>

<template>
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
  <button @click="number1.value = number2.value = operador.value = 0; resultado.value = 0">C</button>
  
  <!-- resultado -->
  <h2>{{ resultado }}</h2>
</template>

<style scoped>
</style>
