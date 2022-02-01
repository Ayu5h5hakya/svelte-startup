<script>
	export let pokemon;
</script>

<a href={'/pokemon/${pokemon.id}'}>
	<img src={pokemon.image} alt="" />
	<p>{pokemon.name}</p>
</a>
