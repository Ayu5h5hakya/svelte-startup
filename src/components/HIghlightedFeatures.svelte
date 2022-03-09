<script>
	const onProgressClick = (index) => {
		console.log(index);
	};
</script>

<h1>Fast track your progress with Duolingo Plus</h1>
<h3>Features designed for the fastest, most fun way to learn a language</h3>
<div class="feature-demo">
	<ul>
		<li on:click={() => onProgressClick(1)}>Progress tracker</li>
		<li on:click={() => onProgressClick(2)}>Ad-Free</li>
		<li on:click={() => onProgressClick(3)}>Streak Repair</li>
		<li on:click={() => onProgressClick(4)}>Unlimited Hearts</li>
	</ul>
	<img
		src="https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/2ec4bb4cf764c7adee599b9e5021a475.gif"
		alt=""
	/>
</div>

<style>
	h1,
	h3 {
		text-align: center;
	}

	.feature-demo {
		display: flex;
	}
</style>
