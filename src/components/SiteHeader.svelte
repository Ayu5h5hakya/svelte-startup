<script>
	import Modal from '../shared/Modal.svelte';
	let isModalOpen = false;

	const openModal = () => {
		isModalOpen = true;
	};

	const closeModal = () => {
		isModalOpen = false;
	};
</script>

<header>
	<img
		src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg"
		alt=""
	/>
	<div on:mouseover={openModal} on:mouseout={closeModal}>Press Me!</div>
</header>

{#if isModalOpen}
	<Modal>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
		<div class="content-item">Text</div>
	</Modal>
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
	.content-item {
		min-width: 150px;
		margin: 5px;
	}
</style>
