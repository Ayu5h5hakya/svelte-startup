<script>
	import { createEventDispatcher } from 'svelte/internal';
	const dispatch = createEventDispatcher();
	const onTabClick = (index) => {
		dispatch('tab-click', index);
	};
</script>

<div class="tabs">
	<p on:click={() => onTabClick(0)}>Following</p>
	<p on:click={() => onTabClick(1)}>For you</p>
</div>

<style>
	.tabs {
		display: flex;
		gap: 2rem;
		color: white;
	}
</style>
