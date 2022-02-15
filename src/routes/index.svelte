<script>
	import SiteHeader from '../components/SiteHeader.svelte';
</script>

<SiteHeader />
<div class="homepage-auth-section">
	<img
		src="https://d35aaqx5ub95lt.cloudfront.net/images/331a32943ff73be28537dfc7469d5639.svg"
		alt="globe"
	/>
	<h2>The free, fun and effective way to learn a language!</h2>
	<button class="dimensions get-started">GET STARTED</button>
	<button class="dimensions account-exists">I ALREADY HAVE AN ACCOUNT</button>
</div>

<style>
	.homepage-auth-section {
		color: white;
		display: flex;
		flex-direction: column;
		max-width: 500px;
		align-items: center;
	}

	h2 {
		text-align: center;
	}

	.dimensions {
		min-width: 220px;
		min-height: 30px;
		color: white;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.get-started {
		background-color: #58cc02;
	}

	.account-exists {
		background-color: #1cb0f6;
	}
</style>
