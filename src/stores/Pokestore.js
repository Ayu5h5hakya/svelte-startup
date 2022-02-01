import { writable } from 'svelte/store';

export const PokeStore = writable([]);

const fetchPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1
		};
	});
	PokeStore.set(loadedPokemon);
};

fetchPokemon();
