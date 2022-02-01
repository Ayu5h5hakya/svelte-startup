<script>
	import Nav from '../components/Nav.svelte';
</script>

<Nav />
<slot />

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #202142;
		line-height: 1.6;
		color: #fff;
	}

	ul {
		list-style: none;
	}

	.container {
		max-width: 768px;
		margin: 100px auto;
		padding: 0 20px;
	}
</style>
