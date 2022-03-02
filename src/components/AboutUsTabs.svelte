<script>
	import Divider from '../shared/Divider.svelte';
	let tabLabels = ['Mission', 'Approach', 'Team', 'Careers', 'Research', 'Press', 'Contact Us'];
	let activeTab = 0;

	const onTabClick = (index) => {
		activeTab = index;
	};
</script>

<div class="labels">
	{#each tabLabels as label, index}
		<div class="tab-label" on:click={() => onTabClick(index)}>
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

	.tab-label {
		color: black;
	}

	.tab-label:hover {
		color: wheat;
	}
</style>
