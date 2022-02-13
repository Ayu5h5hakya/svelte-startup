<script>
	import Modal from '../shared/Modal.svelte';
	import LanguageItem from '../components/LanguageItem.svelte';
</script>

<header>
	<img
		src="https://d35aaqx5ub95lt.cloudfront.net/images/dca3b978d07a7dfc05adb1d5526e9e21.svg"
		alt=""
	/>
	<div>
		<div class="lang-dropdown-btn">Press Me!</div>
		<div class="lang-dropdown-modal">
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
		</div>
	</div>
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
	.lang-dropdown-btn {
		background-color: black;
		color: white;
		padding: 10px;
		font-size: 20px;
	}

	.lang-dropdown-modal {
		display: block;
	}
</style>
