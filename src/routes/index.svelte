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

<div class="duolingo-info1">
	<img
		src="https://d35aaqx5ub95lt.cloudfront.net/images/776364e6419216ffd84ddf8d8815711b.svg"
		alt="globe"
	/>
	<h2>The world's #1 way to learn a language</h2>
	<p>
		Learning with Duolingo is fun, and research shows that it works! With quick, bite-sized lessons,
		you'll earn points and unlock new levels while gaming real-world communication skills.
	</p>
</div>

<div class="duolingo-info2">
	<img src="https://d35aaqx5ub95lt.cloudfront.net/images/laptop-features.svg" alt="globe" />
	<h2>Why you'll love learning with Duolingo</h2>
	<div class="info-row">
		<img src="https://d35aaqx5ub95lt.cloudfront.net/images/feature-streak.svg" alt="flame" />
		<div>
			<h3>Effective and efficient</h3>
			<p>
				Our courses effectively and effeciently teach reading, listening and speaking skills. Check
				out our latest research
			</p>
		</div>
	</div>
	<div class="info-row">
		<img src="https://d35aaqx5ub95lt.cloudfront.net/images/feature-streak.svg" alt="flame" />
		<div>
			<h3>Effective and efficient</h3>
			<p>
				Our courses effectively and effeciently teach reading, listening and speaking skills. Check
				out our latest research
			</p>
		</div>
	</div>
	<div class="info-row">
		<img src="https://d35aaqx5ub95lt.cloudfront.net/images/feature-streak.svg" alt="flame" />
		<div>
			<h3>Effective and efficient</h3>
			<p>
				Our courses effectively and effeciently teach reading, listening and speaking skills. Check
				out our latest research
			</p>
		</div>
	</div>
	<div class="info-row">
		<img src="https://d35aaqx5ub95lt.cloudfront.net/images/feature-streak.svg" alt="flame" />
		<div>
			<h3>Effective and efficient</h3>
			<p>
				Our courses effectively and effeciently teach reading, listening and speaking skills. Check
				out our latest research
			</p>
		</div>
	</div>
</div>

<style>
	.homepage-auth-section {
		color: white;
		display: flex;
		flex-direction: column;
		max-width: 500px;
		align-items: center;
	}

	.homepage-auth-section h2 {
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

	.duolingo-info1 {
		display: flex;
		flex-direction: column;
		background: white;
		margin-top: 20px;
		padding: 20px;
		text-align: center;
	}

	.duolingo-info2 {
		display: flex;
		flex-direction: column;
		background: white;
		margin-top: 20px;
		padding: 20px;
	}

	.duolingo-info1 img {
		height: 150px;
	}

	.info-row {
		display: flex;
		align-items: start;
	}
</style>
