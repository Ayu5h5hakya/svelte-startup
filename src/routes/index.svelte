<script>
	import { onDestroy } from 'svelte/internal';

	import { PokeStore } from '../stores/Pokestore.js';
	let pokemonList = [];

	const unSub = PokeStore.subscribe((data) => {
		pokemonList = data;
	});
</script>

<div class="container">
	{#each pokemonList as pokemon}
		<p>{pokemon.name}</p>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
