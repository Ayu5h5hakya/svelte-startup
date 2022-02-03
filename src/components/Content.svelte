<script>
	import { getContext } from 'svelte';
	import Popup from './Popup.svelte';
	const { open } = getContext('simple-modal');
	const showSurprise = () => open(Popup, { message: "It's a modal!" });
</script>

<p>
	<span class="header-lang-selector" on:click={showSurprise}>Site language : English</span>
</p>

<style>
	.header-lang-selector {
		font-family: 'Varela Round', sans-serif;
		font-weight: bold;
		color: white;
		text-transform: uppercase;
	}
</style>
