<script setup>
import { ref } from 'vue';

const title = "Calculadora";
const number1 = ref(0);
const number2 = ref(0);
const operador = ref(0);
const resultado = ref(0);

// Função de cálculo
function calc() {
  if (operador === 1) {
    if (number2 === 0) {
    resultado = "Erro: Divisão por zero";
    } else {
    resultado = number1 / number2;
    }
  } else if (operador === 2) {
    resultado = number1 * number2;
  } else if (operador === 3) {
    resultado = number1 - number2;
  } else if (operador === 4) {
    resultado = number1 + number2;
  }
}

// Função para definir operador
function atualizarOperador(valor) {
  operador = valor;
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
  <button @click="number1 = number2 = operador = 0; resultado = 0">C</button>
  
  <!-- resultado -->
  <h2>{{ resultado }}</h2>
</template>

<style scoped>
</style>
