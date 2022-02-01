<script>
	export let pokemon;
</script>

<div class="card">
	<a href={'/pokemon/${pokemon.id}'}>
		<img src={pokemon.image} alt={pokemon.name} />
		<p>{pokemon.name}</p>
	</a>
</div>

<style>
	.card {
		text-align: center;
		padding: 40px;
		margin: 10px;
		background: #e74c3c;
	}
</style>
