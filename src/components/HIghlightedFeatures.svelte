<script>
	const gifList = [
		'https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/2ec4bb4cf764c7adee599b9e5021a475.gif',
		'https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/fa07db4885751ed282f25d30da7c58a1.gif',
		'https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/2ec4bb4cf764c7adee599b9e5021a475.gif',
		'https://d35aaqx5ub95lt.cloudfront.net/images/plusLandingPage/dd6dc3cab1b937311b9e231c6209917e.gif'
	];

	let currentIndex = 0;
	const onProgressClick = (index) => {
		currentIndex = index;
	};
</script>

<h1>Fast track your progress with Duolingo Plus</h1>
<h3>Features designed for the fastest, most fun way to learn a language</h3>
<div class="feature-demo">
	<ul>
		<li on:click={() => onProgressClick(0)}>Progress tracker</li>
		<li on:click={() => onProgressClick(1)}>Ad-Free</li>
		<li on:click={() => onProgressClick(2)}>Streak Repair</li>
		<li on:click={() => onProgressClick(3)}>Unlimited Hearts</li>
	</ul>
	<img src={gifList[currentIndex]} alt="" />
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
