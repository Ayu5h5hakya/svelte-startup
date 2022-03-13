<script>
	import SiteHeader from '../components/SiteHeader.svelte';
	import SiteFooter from '../components/SiteFooter.svelte';
	import HomeAuthSection from '../components/HomeAuthSection.svelte';
	import LanguageNavigation from '../components/LanguageNavigation.svelte';
</script>

<SiteHeader />
<HomeAuthSection />
<LanguageNavigation />
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
<SiteFooter />

<style>
	.duolingo-info1 {
		display: flex;
		flex-direction: column;
		background: white;
		text-align: center;
		font-family: 'Roboto Condensed', sans-serif;
		padding: 30px 0 30px 0;
	}

	.duolingo-info2 {
		display: flex;
		flex-direction: column;
		background: white;
		align-items: center;
		font-family: 'Roboto Condensed', sans-serif;
		padding: 30px 0 30px 0;
	}

	.duolingo-info3 {
		display: flex;
		flex-direction: column;
		background: white;
		align-items: center;
		font-family: 'Roboto Condensed', sans-serif;
		padding: 30px 0 30px 0;
	}

	.duolingo-info4 {
		display: flex;
		flex-direction: column;
		background: white;
		align-items: center;
		font-family: 'Roboto Condensed', sans-serif;
		padding: 30px 0 30px 0;
	}

	.duolingo-info5 {
		display: flex;
		flex-direction: column;
		background: white;
		align-items: center;
		font-family: 'Roboto Condensed', sans-serif;
	}

	.duolingo-info1 img {
		height: 150px;
	}

	.info-row {
		display: flex;
		align-items: start;
	}
</style>
