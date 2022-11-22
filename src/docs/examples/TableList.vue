<template>

</template>
<script lang="ts" setup>
const getPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const pokemons = await res.json();
  return pokemons;
}

</script>