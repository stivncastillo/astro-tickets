<script lang="ts">
 // @ts-nocheck
const PRICE_BASE = 10000;
export default {
  name: "ReservationCardVue",
  props: {
    title: String,
  },
  data() {
    return {
      count: 1,
      price: PRICE_BASE
    };
  },
  methods: {
    add() {
      this.count++;
      this.price = this.count * PRICE_BASE;
    },
    subtract() {
      const newCount = this.count - 1;
      if (newCount >= 1) {
        this.count = newCount
        this.price = newCount * PRICE_BASE
      };
    },
    checkout() {
    alert(`Sus ${this.count} asientos fueron reservados.`)

    }
  },
};
</script>

<template>
  <div class="p-4 border-4 border-green-500 rounded-md text-white">
      <div class="flex flex-row justify-start items-center space-x-2">
        <img class="w-8" src="/assets/vue.png"/>
        <h2 class="text-lg">Book now!</h2>
      </div>

      <h3 class="text-2xl mb-2 font-bold">{{title}}</h3>

      <p class="mb-4">Seleccione el número de asientos a reservar</p>

      <div class="flex flex-row space-x-4 justify-center items-center mb-4">
        <button class="bg-green-400 w-8 h-8" @click="subtract">-</button>
        <span>{{count}} Personas</span>
        <button class="bg-green-400 w-8 h-8" @click="add">+</button>
      </div>

      <p>Total: <span class="text-lg text-green-400">$ {{price}} COP</span></p>

      <button @click="checkout" class="px-4 py-2 bg-green-500 mt-4">Checkout!</button>
    </div>
</template>