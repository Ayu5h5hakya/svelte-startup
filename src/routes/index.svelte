<script>
	import SideBar from '../components/SideBar.svelte';
	import SiteHeader from '../shared/SiteHeader.svelte';
</script>

<SiteHeader />
<div class="wrapper">
	<SideBar />
	<div class="main-content">
		<h3>This is the main content</h3>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		overflow: hidden;
		height: 100vh;
	}
	.main-content {
		overflow-y: auto;
	}

	h3 {
		background: red;
		margin-left: 300px;
	}
</style>
