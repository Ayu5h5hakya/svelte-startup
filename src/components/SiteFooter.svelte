<script>
	import SiteLanguage from '../shared/SiteLanguage.svelte';
</script>

<h3>Learn a language with Duolingo.</h3>
<button>GET STARTED</button>
<div class="quick-access">
	<div>Item1</div>
	<div>Item1</div>
	<div>Item1</div>
	<div>Item1</div>
	<div>Item1</div>
	<div>Item1</div>
</div>
<SiteLanguage />

<style>
	.quick-access {
		display: grid;
		grid-template-columns: auto auto;
	}
</style>
