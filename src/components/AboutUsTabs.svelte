<script>
	import Divider from '../shared/Divider.svelte';
	let tabLabels = ['Mission', 'Approach', 'Team', 'Careers', 'Research', 'Press', 'Contact Us'];
	let activeTab = 0;
</script>

<div class="labels">
	{#each tabLabels as label}
		<div class:active={label === 'Mission'}>
			<h3>{label}</h3>
		</div>
	{/each}
</div>
<Divider />

<style>
	.labels {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.active {
		color: red;
	}
</style>
