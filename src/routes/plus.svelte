<script>
	import SiteStats from '../components/SiteStats.svelte';
	import ChoosePlanSection from '../components/ChoosePlanSection.svelte';
	import HIghlightedFeatures from '../components/HIghlightedFeatures.svelte';
</script>

<div class="plus-header">
	<div class="plus-header-content">
		<div class="title-subtitle">
			<h3>Learn a new language the fun way</h3>
			<h5>Reach your language goals with the world's #1 language app</h5>
		</div>
		<img src="https://d35aaqx5ub95lt.cloudfront.net/images/duo-plus-shop.svg" alt="" />
	</div>
</div>
<ChoosePlanSection />
<SiteStats />
<HIghlightedFeatures />

<style>
	.plus-header {
		width: 100%;
		height: 300px;
		display: flex;
		justify-content: center;
		background: yellowgreen;
	}

	.plus-header-content {
		width: 70%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	img {
		object-fit: none;
	}
</style>
