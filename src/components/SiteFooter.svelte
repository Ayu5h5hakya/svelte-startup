<script>
	import SiteLanguage from '../shared/SiteLanguage.svelte';
	import QuickAccessgrid from './QuickAccessgrid.svelte';
</script>

<div class="footer-content">
	<div class="first-content">
		<h1>Learn a language with Duolingo.</h1>
		<button><h3>GET STARTED</h3></button>
	</div>
	<QuickAccessgrid />
	<SiteLanguage />
</div>

<style>
	.first-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.footer-content {
		padding: 40px;
		color: white;
	}
	h3,
	button,
	div {
		font-family: 'Roboto Condensed', sans-serif;
	}

	button {
		min-width: 200px;
		color: white;
		background-color: #58cc02;
		border-radius: 10px;
		font-weight: bold;
		box-shadow: inset;
	}
</style>
