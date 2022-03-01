<script>
	import Divider from '../shared/Divider.svelte';
	let tabLabels = ['Mission', 'Approach', 'Team', 'Careers', 'Research', 'Press', 'Contact Us'];
</script>

<div class="labels">
	{#each tabLabels as label}
		<h3>{label}</h3>
	{/each}
</div>
<Divider />

<style>
	.labels {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
