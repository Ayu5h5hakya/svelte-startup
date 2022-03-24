<script>
	import FollowingSection from '../components/FollowingSection.svelte';
	import SiteHeader from '../shared/SiteHeader.svelte';
	import SectionSelector from '../components/SectionSelector.svelte';
	let activeTab = 0;
</script>

<SiteHeader />
<SectionSelector />
<FollowingSection />
