<script>
	import UserPush from '../components/UserPush.svelte';

	import SideBar from '../components/SideBar.svelte';
</script>

<ul>
	<li><UserPush /></li>
	<li><UserPush /></li>
	<li><UserPush /></li>
	<li><UserPush /></li>
	<li><UserPush /></li>
	<li><UserPush /></li>
	<li><UserPush /></li>
	<li><UserPush /></li>
	<li><UserPush /></li>
</ul>

<style>
	.wrapper {
		display: flex;
		overflow: hidden;
		height: 100vh;
	}
	aside {
		flex: 1;
	}

	main {
		flex: 3;
	}
</style>
