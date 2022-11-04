<script lang="ts">
  const PRICE_BASE = 10000;
  let count = 1;
  let price = PRICE_BASE;
  export let title;

  function add() {
    count += 1;
    price = count * PRICE_BASE;
  }

  function subtract() {
    const newCount = count - 1
    if (newCount >= 1) {
      count -= 1
      price = count * PRICE_BASE;

    };
  }

  const checkout = () => {
    alert(`Sus ${count} asientos fueron reservados.`)
  }
</script>

<div class="p-4 border-4 border-orange-500 rounded-md text-white">
  <div class="flex flex-row justify-start items-center space-x-2">
    <img class="w-8" src="/assets/svelte.png" alt="Lib"/>
    <h2 class="text-lg">Book now!</h2>
  </div>

  <h3 class="text-2xl mb-2 font-bold">{title}</h3>

  <p class="mb-4">Seleccione el número de asientos a reservar</p>

  <div class="flex flex-row space-x-4 justify-center items-center mb-4">
    <button class="bg-orange-500 w-8 h-8" on:click={subtract}>-</button>
    <span>{count} Personas</span>
    <button class="bg-orange-500 w-8 h-8" on:click={add}>+</button>
  </div>

  <p>Total: <span class="text-lg text-orange-500">$ {price} COP</span></p>

  <button on:click={checkout} class="px-4 py-2 bg-orange-400 mt-4">Checkout!</button>
</div>