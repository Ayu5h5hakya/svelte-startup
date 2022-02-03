<script>
	import Modal from 'svelte-simple-modal';
	import Content from './Content.svelte';
</script>

<header>
	<img
		src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg"
		alt=""
	/>
	<Modal
		disableFocusTrap={true}
		styleBg={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
		styleWindow={{ boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.15)' }}
		classWindow="modal-wrapper"
	>
		<Content />
	</Modal>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	img {
		height: 36px;
	}
	.modal-wrapper {
		position: absolute;
		right: 0;
	}
</style>
