<script>
	import { onDestroy } from 'svelte/internal';

	import { PokeStore } from '../stores/Pokestore.js';
	import PokemonCard from '../components/PokemonCard.svelte';
	let pokemonList = [];

	const unSub = PokeStore.subscribe((data) => {
		pokemonList = data;
	});
</script>

<div class="container">
	{#each pokemonList as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
