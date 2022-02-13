<script>
	import SiteHeader from '../components/SiteHeader.svelte';
</script>

<SiteHeader />
<div class="homepage-auth-section">
	The free, fun and effective way to learn a language!
	<button>GET STARTED</button>
	<button>I ALREADY HAVE AN ACCOUNT</button>
</div>

<style>
	.homepage-auth-section {
		display: flex;
		flex-direction: column;
		max-width: 500px;
	}
</style>
