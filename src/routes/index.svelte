<script>
	import { onDestroy } from 'svelte/internal';

	import { PokeStore } from '../stores/Pokestore.js';
	import PokemonCard from '../components/PokemonCard.svelte';
	let pokemonList = [];
	let filteredPokemon = [];
	let searchTerm = '';

	const unSub = PokeStore.subscribe((data) => {
		pokemonList = data;
	});

	$: {
		if (searchTerm) {
			filteredPokemon = pokemonList.filter((pokemon) => {
				return pokemon.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
			});
		} else {
			filteredPokemon = [...pokemonList];
		}
	}
</script>

<div class="container">
	<input type="text" placeholder="Search pokemon" bind:value={searchTerm} />
	<div class="pokemon-grid">
		{#each filteredPokemon as pokemon}
			<PokemonCard {pokemon} />
		{/each}
	</div>
</div>

<style>
	.container {
	}
	.pokemon-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	input {
		width: 100%;
	}
</style>
