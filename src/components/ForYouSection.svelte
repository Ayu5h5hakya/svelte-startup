<script>
	import Recommendation from './Recommendation.svelte';
</script>

<div class="welcome">
	<p>Welcome to the new feed!</p>
	<p>
		We’re updating the cards and ranking all the time, so check back regularly. At first, you might
		need to follow some people or star some repositories to get started
	</p>
	<button>Send Feedback</button>
</div>

<Recommendation>
	<p slot="title">Recommended for ayusj</p>
</Recommendation>

<style>
	.welcome {
		color: white;
		border-style: solid;
		border-color: white;
	}
</style>
