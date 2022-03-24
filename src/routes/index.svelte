<script>
	import FollowingSection from '../components/FollowingSection.svelte';
	import SiteHeader from '../shared/SiteHeader.svelte';
	import SectionSelector from '../components/SectionSelector.svelte';
	import ForYouSection from '../components/ForYouSection.svelte';
	let activeTab = 0;

	const switchActiveTab = (e) => {
		activeTab = e.detail;
	};
</script>

<SiteHeader />
<SectionSelector on:tab-click={switchActiveTab} />
{#if activeTab == 0}
	<FollowingSection />
{:else}
	<ForYouSection />
{/if}
