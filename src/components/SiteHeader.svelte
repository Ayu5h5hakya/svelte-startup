<script>
	import Modal from '../shared/Modal.svelte';
	let isModalOpen = false;

	const openModal = () => {
		isModalOpen = true;
	};
</script>

<header>
	<img
		src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg"
		alt=""
	/>
	<button on:click={openModal}>Press Me!</button>
</header>

{#if isModalOpen}
	<Modal />
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	img {
		height: 36px;
	}
</style>
