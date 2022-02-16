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
		<img src="https://d35aaqx5ub95lt.cloudfront.net/images/feature-check.svg" alt="flame" />
		<div>
			<h3>Personalized learning</h3>
			<p>
				Our courses effectively and effeciently teach reading, listening and speaking skills. Check
				out our latest research
			</p>
		</div>
	</div>
	<div class="info-row">
		<img
			src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/ebdcc22deaf0f85388fcb09e7ecfbe78.svg"
			alt="flame"
		/>
		<div>
			<h3>Star motivated</h3>
			<p>
				Our courses effectively and effeciently teach reading, listening and speaking skills. Check
				out our latest research
			</p>
		</div>
	</div>
	<div class="info-row">
		<img
			src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/a4d5fab3d1926c240cb2ae696b07d156.svg"
			alt="flame"
		/>
		<div>
			<h3>Have fun with it!</h3>
			<p>
				Our courses effectively and effeciently teach reading, listening and speaking skills. Check
				out our latest research
			</p>
		</div>
	</div>
</div>

<div class="duolingo-info3">
	<img src="https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-fly-circle-2.svg" alt="globe" />
	<h2>Boost your learning with Duolingo Plus</h2>
	<p>
		Learning a language on Duolingo is completely free, but you can remove ads and make faster
		progress with Plus. Try it free for 14 days!
	</p>
	<h4>LEARN MORE ABOUT DUOLINGO PLUS</h4>
</div>

<div class="duolingo-info4">
	<img src="https://d35aaqx5ub95lt.cloudfront.net/images/duo-traveler.svg" alt="globe" />
	<h2>Learn anytime, anywhere</h2>
	<p>
		Make your breaks and commutes more productive with our iPhone and Android apps. Download them
		and see why Apple and Google gave us their highest accolades.
	</p>
	<button>Download on the App Store</button>
	<button>Get it on Google Play</button>
</div>

<div class="duolingo-info5">
	<img src="https://d35aaqx5ub95lt.cloudfront.net/images/laptop-schools.svg" alt="globe" />
	<h2>Duolingo for Schools</h2>
	<p>
		Free teacher tools to help students learn languages thhrough the Duolingo app, both in and out
		of the classroom.
	</p>
	<h4>BRING DUOLINGO TO YOUR CLASSROOM</h4>
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

	.duolingo-info3 {
		display: flex;
		flex-direction: column;
		background: white;
		margin-top: 20px;
		padding: 20px;
	}

	.duolingo-info4 {
		display: flex;
		flex-direction: column;
		background: white;
		margin-top: 20px;
		padding: 20px;
	}

	.duolingo-info5 {
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
