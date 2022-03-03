<script>
	import Missions from '../components/Missions.svelte';
	import AboutUsTabs from '../components/AboutUsTabs.svelte';

	let activeTab = 0;
	const onTabChange = (e) => {
		console.log(e.detail);
		activeTab = e.detail.index;
	};
</script>

<div class="about-us">
	<AboutUsTabs {activeTab} on:tab-change={onTabChange} />
	{#if activeTab === 0}
		<Missions />
	{:else}
		<h3>Under construction</h3>
	{/if}
</div>

<style>
	.about-us {
		padding: 100px;
	}
</style>
