<script>
	import Modal from '../shared/Modal.svelte';
	import LanguageItem from '../components/LanguageItem.svelte';
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
	<div on:mouseover={openModal}>Press Me!</div>
</header>

{#if isModalOpen}
	<Modal>
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
		<LanguageItem />
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
</style>
