<script>
	import HorizontalDivider from '../shared/HorizontalDivider.svelte';

	import RecentActivity from './RecentActivity.svelte';
	import RecentRepositories from './RecentRepositories.svelte';
</script>

<aside>
	<div class="repo-sidebar">
		<RecentRepositories />
		<HorizontalDivider />
		<RecentActivity />
	</div>
</aside>

<style>
	.repo-sidebar {
		position: fixed;
		width: 300px;
		height: 100%;
		background-color: #0d1117;
		padding: 40px;
	}
</style>
